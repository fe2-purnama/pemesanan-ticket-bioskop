const express = require("express");
const router = express.Router();
const { bookTicket, editTicket } = require('./ticket.service');

router.post("/book", async (req, res) => {
    const { userId, showId, seatNumber } = req.body;

    try {
        const ticket = await bookTicket(userId, showId, seatNumber);
        res.json({ message: 'Tiket berhasil dipesan', ticket });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put("/edit/:id", async (req, res) => {
    const ticketId = req.params.id;
    const { userId, newShowId, newSeatNumber } = req.body;

    try {
        const updatedTicket = await editTicket(ticketId, userId, newShowId, newSeatNumber);
        res.json({ message: 'Tiket berhasil diubah', ticket: updatedTicket });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
