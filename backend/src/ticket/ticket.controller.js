const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { bookTicket, editTicket, cancelTicket, getUserTickets, getSeatAvailability, getShowId, findShows } = require('./ticket.service');

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

router.delete("/cancel/:id", async (req, res) => {
    const ticketId = req.params.id;

    try {
        const canceledTicket = await cancelTicket(ticketId);
        res.json({ message: 'Tiket berhasil dibatalkan', ticket: canceledTicket });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/user/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
        const tickets = await getUserTickets(userId);
        res.json({ tickets });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/availability/:showId', async (req, res) => {
  const { showId } = req.params;

  try {
    const tickets = await prisma.tickets.findMany({
      where: {
        show_id: parseInt(showId),
      },
      select: {
        seat_number: true,
        booking_time: true,
      },
    });

    const seatAvailability = {};
    tickets.forEach((ticket) => {
      seatAvailability[ticket.seat_number] = {
        booked: true, 
        booking_time: ticket.booking_time,
      };
    });

    res.status(200).json({ seatAvailability });
  } catch (error) {
    console.error('Error fetching seat availability:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/showId', async (req, res) => {
    const { filmTitle, showTime, cinemaDetails } = req.query;

    try {
        const show = await findShows(filmTitle, showTime, cinemaDetails);
        if (!show) {
            return res.status(404).json({ message: 'Show tidak ditemukan' });
        }
        res.json({ show });
    } catch (err) {
        console.error('Error in findShow:', err);
        res.status(500).json({ message: 'Terjadi kesalahan saat mencari show' });
    }
});


module.exports = router;