const express = require('express');
const router = express.Router();
const { fetchAllPayments, fetchPaymentById, addPayment, editPayment, removePayment } = require('./payment.service');

// Get all payments
router.get('/', async (req, res) => {
    try {
        const payments = await fetchAllPayments();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get payment by ID
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const payment = await fetchPaymentById(id);
        res.json(payment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Create new payment
router.post('/', async (req, res) => {
    const { ticket_id, amount, payment_time, payment_method } = req.body;
    try {
        const newPayment = await addPayment({ ticket_id, amount, payment_time, payment_method });
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update payment
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { ticket_id, amount, payment_time, payment_method } = req.body;
    try {
        const updatedPayment = await editPayment(id, { ticket_id, amount, payment_time, payment_method });
        res.json(updatedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Partially update payment
router.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;
    try {
        const updatedPayment = await editPayment(id, updateData);
        res.json(updatedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete payment
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await removePayment(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
