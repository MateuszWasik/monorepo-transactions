import express from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';

import cors from 'cors';
import { transactions } from './transactions';

const jsonParser = bodyParser.json();

const app = express();
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/transactions', (_, res) => {
  setTimeout(() => {
    res.send(transactions);
  }, 4000);
});

app.post('/add', jsonParser, (req, res) => {
  const newTransaction = req.body;

  transactions.push(newTransaction);

  res.send('Added!');
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
