import express from 'express';
import cors from 'cors';
import gridController from './controllers/apiController';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', gridController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
