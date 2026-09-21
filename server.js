const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const ROOT = __dirname;
const assistantName = 'Ava';

const knowledgeLibrary = [
  {
    keywords: ['study', 'learn', 'education', 'school', 'exam', 'course'],
    reply: 'For learning, break it into small steps, practice a little every day, and review what you miss. Consistency beats cramming every time.'
  },
  {
    keywords: ['business', 'marketing', 'sales', 'brand', 'startup', 'company'],
    reply: 'A strong business idea starts with a real problem, a clear audience, and a simple offer. Focus on solving one painful problem well.'
  },
  {
    keywords: ['health', 'fitness', 'wellness', 'exercise', 'diet'],
    reply: 'Healthy routines are easier when they are realistic. Small daily habits like walking, sleeping well, and eating balanced meals create lasting results.'
  },
  {
    keywords: ['money', 'finance', 'budget', 'saving', 'invest', 'income'],
    reply: 'Good money habits are simple: track spending, pay yourself first, reduce waste, and build an emergency buffer before taking bigger risks.'
  },
  {
    keywords: ['coding', 'programming', 'javascript', 'python', 'developer', 'bug', 'error'],
    reply: 'The best way to fix code is to break the problem into small pieces, reproduce the issue, and test one change at a time.'
  },
  {
    keywords: ['design', 'ui', 'ux', 'layout', 'website', 'frontend', 'app'],
    reply: 'Good design feels simple and easy to use. Clear spacing, consistent buttons, and intuitive flow help people understand the product without effort.'
  },
  {
    keywords: ['relationship', 'love', 'friend', 'communication', 'family'],
    reply: 'Strong relationships grow through honesty, patience, and listening without rushing to respond.'
  },
  {
    keywords: ['travel', 'trip', 'holiday', 'vacation', 'tour'],
    reply: 'The best trips mix a little planning with flexibility. Keep your essentials ready, leave room for surprises, and prioritize experiences over rushing.'
  },
  {
    keywords: ['productivity', 'focus', 'time', 'work', 'schedule', 'planning'],
    reply: 'Productivity improves when your day has a clear priority, fewer distractions, and realistic time blocks.'
  },
  {
    keywords: ['creative', 'idea', 'art', 'write', 'story', 'brainstorm'],
    reply: 'Creative ideas grow when you explore freely first, then refine. Don’t judge the first version — shape it into something useful.'
  }
];

function buildKnowledgeReply(text) {
  const lower = text.toLowerCase();

  for (const item of knowledgeLibrary) {
    const match = item.keywords.some(keyword => lower.includes(keyword));
    if (match) {
      return item.reply;
    }
  }

  return null;
}

function getUITReply(message, mode = 'FAST') {
  const text = String(message || '').trim();

  if (!text) {
    return `Absolutely — I’m ${assistantName}, and I’m here to help 😊`;
  }

  const lower = text.toLowerCase();

  const knowledgeReply = buildKnowledgeReply(text);
  if (knowledgeReply) {
    return `${knowledgeReply} 💡 If you want, I can go deeper and make it practical for your exact situation.`;
  }

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
    return `Hey there! I’m ${assistantName}, your friendly assistant 😊 What are you working on today?`;
  }

  if (lower.includes('who are you') || lower.includes('what are you')) {
    return `I’m ${assistantName}, your local assistant here to help with ideas, writing, coding, planning, learning, and everyday problem solving 🤝`;
  }

  if (lower.includes('code') || lower.includes('javascript') || lower.includes('python')) {
    return `I can help with that in ${mode.toLowerCase()} mode 💻 Tell me the goal, the issue, or the code, and I’ll walk you through it clearly.`;
  }

  if (lower.includes('ui') || lower.includes('design') || lower.includes('front end') || lower.includes('frontend')) {
    return 'Absolutely — I can help you improve the layout, make it easier to use, and suggest a more natural flow for your users ✨';
  }

  if (lower.includes('research') || lower.includes('find') || lower.includes('look up')) {
    return 'I can help you narrow the topic, compare options, and turn the information into a simple answer that makes sense 🔎';
  }

  if (lower.includes('thank')) {
    return 'Always happy to help 😊 Tell me what you want to build next.';
  }

  return `Got it — I can help with that 😄 You said: "${text}". We can break it down together and make it simple, practical, and clear.`;
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
}

function safeFilePath(requestPath) {
  const basePath = path.normalize(requestPath).replace(/^\/+/, '');
  return path.join(ROOT, basePath || 'index.html');
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/chat') {
    let raw = '';

    req.on('data', chunk => {
      raw += chunk;
    });

    req.on('end', () => {
      try {
        const payload = raw ? JSON.parse(raw) : {};
        const message = typeof payload.message === 'string' ? payload.message : '';
        const mode = typeof payload.mode === 'string' ? payload.mode : 'FAST';

        sendJson(res, 200, {
          success: true,
          reply: getUITReply(message, mode),
          mode
        });
      } catch (error) {
        sendJson(res, 400, {
          success: false,
          reply: 'Invalid request payload.',
          error: error.message
        });
      }
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, {
      success: true,
      status: 'online',
      service: 'UIT LOCAL AI'
    });
    return;
  }

  const requestPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const filePath = safeFilePath(requestPath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
        return;
      }

      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server error');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.ico': 'image/x-icon'
    }[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`UIT LOCAL AI ONLINE on http://localhost:${PORT}`);
});
