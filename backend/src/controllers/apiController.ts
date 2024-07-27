import { Router } from 'express';
import { generateGrid, generateCode, setBias } from '../services/apiService';

const router = Router();

router.get('/generate-grid', (req, res) => {
  const grid = generateGrid();
  res.json(grid);
});

router.get('/get-code', (req, res) => {
  const code = generateCode();
  res.json({ code });
});

router.post('/set-bias', (req, res) => {
  const { bias } = req.body;
  setBias(bias);
  res.sendStatus(200);
});

export default router;
