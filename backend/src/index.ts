import express from 'express';
import cors from 'cors';
import apiController from './controllers/apiController';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', apiController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
