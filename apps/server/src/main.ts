import express from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';

import cors from 'cors';
import { transactions } from './transactions';

const jsonParser = bodyParser.json();

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/transactions', (_, res) => {
  res.send(transactions);
});

app.post('/add', jsonParser, (req, res) => {
  const newTransaction = req.body;

  transactions.push(newTransaction);

  console.log('request', req.body);
  res.send('Added!');
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
