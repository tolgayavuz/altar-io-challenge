import { Router } from 'express';
import { generateGrid, generateCode, setBias } from '../services/apiService';
import { Payment } from '../database/model/Payment';
import Database from '../database/index';

const router = Router();
const db = new Database();

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

router.get('/get-payments', (req, res) => {
  const payments = db.getPayments();
  res.json({ payments });
})

router.post('/add-payment', (req, res) => {
  try {
    const { data } = JSON.parse(req.body);
    const payment = new Payment(data.name, data.amount, data.grid);
    db.addPayment(payment);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

export default router;
