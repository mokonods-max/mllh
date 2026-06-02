const fs = require('fs');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

// Configuration files
const CONFIG_FILE = path.join(__dirname, 'sync-config.json');
const LOCAL_CONFIG_FILE = path.join(__dirname, 'sync-config.local.json');

let config = {
  webhookUrl: "https://hook.integromat.com/your_unique_webhook_id_here",
  githubUrl: "https://github.com/mokonods-max/mllh.git",
  branch: "main",
  autoCommit: true,
  autoPush: true,
  ignoredPaths: [
    "node_modules",
    ".git",
    ".gitignore",
    "sync-engine.js",
    "sync-config.json",
    "sync-config.local.json"
  ]
};

// Load configuration files
function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
      config = { ...config, ...data };
    }
    if (fs.existsSync(LOCAL_CONFIG_FILE)) {
      const data = JSON.parse(fs.readFileSync(LOCAL_CONFIG_FILE, 'utf8'));
      config = { ...config, ...data };
    }
  } catch (err) {
    console.error('Error loading configuration, using defaults:', err.message);
  }
}

loadConfig();

console.log('==================================================');
console.log('     ROSE BAGHDAD - AUTOMATION SYNC ENGINE        ');
console.log('==================================================');
console.log(`Workspace Path : ${__dirname}`);
console.log(`GitHub Remote  : ${config.githubUrl}`);
console.log(`Git Branch     : ${config.branch}`);
console.log(`Webhook Sync   : ${config.webhookUrl.includes('your_unique_webhook') ? 'NOT CONFIGURED (Placeholder)' : 'ACTIVE'}`);
console.log(`Auto Commit    : ${config.autoCommit ? 'ENABLED' : 'DISABLED'}`);
console.log(`Auto Push      : ${config.autoPush ? 'ENABLED' : 'DISABLED'}`);
console.log('==================================================');

// Debouncing queue
const changeQueue = new Map();

function watchDirectory(dir) {
  fs.watch(dir, { recursive: true }, (eventType, filename) => {
    if (!filename) return;

    // Resolve relative path to work directory
    const fullPath = path.join(dir, filename);
    const relativePath = path.relative(__dirname, fullPath);
    
    // Check if the path is ignored
    const isIgnored = config.ignoredPaths.some(ignored => {
      const normalizedIgnored = path.normalize(ignored);
      const normalizedRelative = path.normalize(relativePath);
      return normalizedRelative === normalizedIgnored || normalizedRelative.startsWith(normalizedIgnored + path.sep);
    });

    if (isIgnored) return;

    // Debounce triggers (1 second threshold)
    if (changeQueue.has(relativePath)) {
      clearTimeout(changeQueue.get(relativePath));
    }

    const timer = setTimeout(() => {
      changeQueue.delete(relativePath);
      handleFileChange(relativePath, fullPath);
    }, 1000);

    changeQueue.set(relativePath, timer);
  });
}

function handleFileChange(relativePath, fullPath) {
  const normalizedPath = relativePath.replace(/\\/g, '/');
  
  if (!fs.existsSync(fullPath)) {
    console.log(`[Sync Action] File deleted: ${normalizedPath}`);
    syncToWebhook(normalizedPath, null, 'delete');
    gitCommitAndPush(normalizedPath, 'delete');
    return;
  }

  const stats = fs.statSync(fullPath);
  if (stats.isDirectory()) return;

  console.log(`[Sync Action] File modified: ${normalizedPath}`);
  
  try {
    let content = null;
    let type = 'text';
    
    const ext = path.extname(normalizedPath).toLowerCase();
    const binaryExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.woff', '.woff2', '.ttf', '.otf', '.ai'];
    
    if (binaryExtensions.includes(ext)) {
      type = 'binary';
      content = fs.readFileSync(fullPath).toString('base64');
    } else {
      content = fs.readFileSync(fullPath, 'utf8');
    }

    // 1. Send data to Make.com / Integromat webhook
    syncToWebhook(normalizedPath, content, type);

    // 2. Perform git commit and push
    gitCommitAndPush(normalizedPath, 'modify');
  } catch (err) {
    console.error(`[Sync Error] Failed to process ${normalizedPath}:`, err.message);
  }
}

function syncToWebhook(filePath, content, type) {
  if (!config.webhookUrl || config.webhookUrl.includes('your_unique_webhook')) {
    return;
  }

  const payload = JSON.stringify({
    event: type === 'delete' ? 'file.deleted' : 'file.modified',
    repository: config.githubUrl,
    branch: config.branch,
    timestamp: new Date().toISOString(),
    file: {
      path: filePath,
      type: type,
      content: content // Plain text for code, Base64 for images/fonts, null for deletions
    }
  });

  try {
    const parsedUrl = new URL(config.webhookUrl);
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        console.log(`[Webhook Sync] Make.com API responded: Status ${res.statusCode} (${body.trim() || 'No Response Payload'})`);
      });
    });

    req.on('error', (err) => {
      console.error('[Webhook Sync Error] Webhook delivery failed:', err.message);
    });

    req.write(payload);
    req.end();
  } catch (err) {
    console.error('[Webhook Sync Error] Invalid Webhook URL format:', err.message);
  }
}

function gitCommitAndPush(filePath, actionType) {
  if (!config.autoCommit) return;

  const actionVerb = actionType === 'delete' ? 'remove' : 'update';
  const prefix = filePath.startsWith('The visual identity of Rose Baghdad') ? 'chore' : 
                 filePath.endsWith('.html') || filePath.endsWith('.css') || filePath.endsWith('.js') ? 'feat' : 'chore';
  
  const commitMsg = `${prefix}: auto-sync ${actionVerb} ${filePath}`;
  const sanitizedMsg = commitMsg.replace(/"/g, '\\"');
  
  // Staging and committing
  const gitCmd = `git add "${filePath}" && git commit -m "${sanitizedMsg}"`;
  
  exec(gitCmd, { cwd: __dirname }, (err, stdout, stderr) => {
    if (err) {
      // Often errors out if there's nothing to commit, which is normal
      return;
    }
    console.log(`[Git Commit] Locally committed: "${commitMsg}"`);
    
    if (config.autoPush) {
      // Disable terminal prompts to prevent hanging
      const pushCmd = `set GIT_TERMINAL_PROMPT=0&& git push origin ${config.branch}`;
      exec(pushCmd, { cwd: __dirname }, (pushErr, pushStdout, pushStderr) => {
        if (pushErr) {
          console.warn(`[Git Push Pending] Local commit created, but remote push is pending credentials authentication.`);
        } else {
          console.log('[Git Push Success] Remote GitHub repository successfully synchronized!');
        }
      });
    }
  });
}

// Start watching the current directory
watchDirectory(__dirname);
console.log('Monitoring active. Edit/save files to trigger real-time synchronization.');
