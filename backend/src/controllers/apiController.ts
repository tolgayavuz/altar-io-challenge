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
  res.json(code);
});

router.post('/set-bias', (req, res) => {
  try {
    const { bias } = req.body;
    setBias(bias);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

router.post('/add-payment', (req, res) => {
  try {
    const { data } = req.body;
    const paymentData = JSON.parse(data);
    const payment = new Payment(paymentData.name, paymentData.amount, paymentData.code, paymentData.grid);
    db.addPayment(payment);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

router.get('/get-payments', (req, res) => {
  const payments = db.getPayments();
  res.json(payments);
});

export default router;
