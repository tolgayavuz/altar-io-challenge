import express from 'express';
import cors from 'cors';
import apiController from './controllers/apiController';
import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import { generateCode, generateGrid, getDatabase } from './services/apiService';

const app = express();
const port = 3000;

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

let startBroadcast = false;

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  let dataInterval: NodeJS.Timeout | null = null;

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    if (message.toString() === 'startGenerator' && !startBroadcast) {
      startBroadcast = true;
      if (dataInterval) {
        clearInterval(dataInterval);
      }

      dataInterval = setInterval(() => {

        const data = {
          grid: generateGrid(),
          code: generateCode(),
          payments: getDatabase().getPayments(),
        }

        wss.clients.forEach(client => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
          }
        });
      }, 2000);
    }

  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
    if (dataInterval) {
      clearInterval(dataInterval);
    }
  });
});

app.use(cors());
app.use(express.json());

app.use('/api', apiController);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
