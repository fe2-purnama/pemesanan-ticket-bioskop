const { findShowById, findUserById, createTicket, updateAvailableSeats, findTicketById, updateTicket, deleteTicket, findTicketsByUserId, findSeatsByShowId, findShow } = require('./ticket.repository');

const bookTicket = async (userId, showId, seatNumber) => {
    const show = await findShowById(showId);
    if (!show) {
        throw new Error('Show tidak ditemukan');
    }

    if (show.available_seats <= 0) {
        throw new Error('Tidak ada kursi yang tersedia');
    }

    const user = await findUserById(userId);
    if (!user) {
        throw new Error('User tidak ditemukan');
    }

    const ticketData = {
        user_id: userId,
        show_id: showId,
        seat_number: seatNumber,
        booking_time: new Date(),
    };

    const newTicket = await createTicket(ticketData);
    await updateAvailableSeats(showId, show.available_seats - 1);

    return newTicket;
};

const editTicket = async (ticketId, userId, newShowId, newSeatNumber) => {
    const ticket = await findTicketById(ticketId);
    if (!ticket) {
        throw new Error('Ticket tidak ditemukan');
    }

    const oldShow = await findShowById(ticket.show_id);
    const newShow = await findShowById(newShowId);
    if (!newShow) {
        throw new Error('Show baru tidak ditemukan');
    }

    if (newShow.available_seats <= 0) {
        throw new Error('Tidak ada kursi yang tersedia di show baru');
    }

    const user = await findUserById(userId);
    if (!user) {
        throw new Error('User tidak ditemukan');
    }

    const updatedTicketData = {
        show_id: newShowId,
        seat_number: newSeatNumber,
    };

    const updatedTicket = await updateTicket(ticketId, updatedTicketData);

    await updateAvailableSeats(oldShow.show_id, oldShow.available_seats + 1);
    await updateAvailableSeats(newShowId, newShow.available_seats - 1);

    return updatedTicket;
};

const cancelTicket = async (ticketId) => {
    const ticket = await findTicketById(ticketId);
    if (!ticket) {
        throw new Error('Ticket tidak ditemukan');
    }

    const show = await findShowById(ticket.show_id);
    if (!show) {
        throw new Error('Show tidak ditemukan');
    }

    await deleteTicket(ticketId);
    await updateAvailableSeats(show.show_id, show.available_seats + 1);

    return ticket;
};

const getUserTickets = async (userId) => {
    const tickets = await findTicketsByUserId(userId);
    return tickets;
};

const getSeatAvailability = async (showId) => {
    const seats = await findSeatsByShowId(showId);
    const seatAvailability = Array(80).fill(false);
    seats.forEach(seat => {
        seatAvailability[seat.seat_number - 1] = true;
    });
    return seatAvailability;
};

const findShows = async (filmTitle, showTime, cinemaDetails) => {
    return await findShow(filmTitle, showTime, cinemaDetails);
};


module.exports = {
    bookTicket,
    editTicket,
    cancelTicket,
    getUserTickets,
    getSeatAvailability,
    findShows
};
