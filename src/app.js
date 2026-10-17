import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const homepage = readFileSync(new URL('../public/index.html', import.meta.url));

export function createApp() {
  return createServer((request, response) => {
    const path = request.url?.split('?')[0];
    let status = 200;
    let type = 'application/json; charset=utf-8';
    let body;

    if (request.method !== 'GET' && request.method !== 'HEAD') {
      status = 405;
      response.setHeader('Allow', 'GET, HEAD');
      body = JSON.stringify({ error: 'Method not allowed' });
    } else if (path === '/') {
      type = 'text/html; charset=utf-8';
      body = homepage;
    } else if (path === '/health') {
      body = JSON.stringify({ status: 'ok', service: 'bug-free-robot' });
    } else {
      status = 404;
      body = JSON.stringify({ error: 'Not found' });
    }

    response.writeHead(status, { 'Content-Type': type });
    response.end(request.method === 'HEAD' ? undefined : body);
  });
}
