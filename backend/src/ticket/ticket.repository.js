const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findShowById = async (showId) => {
    return await prisma.shows.findUnique({
        where: { show_id: showId },
    });
};

const findUserById = async (userId) => {
    return await prisma.users.findUnique({
        where: { user_id: userId },
    });
};

const createTicket = async (ticketData) => {
    return await prisma.tickets.create({
        data: ticketData,
    });
};

const updateAvailableSeats = async (showId, newSeatCount) => {
    return await prisma.shows.update({
        where: { show_id: showId },
        data: { available_seats: newSeatCount },
    });
};

const findTicketById = async (ticketId) => {
    return await prisma.tickets.findUnique({
        where: { ticket_id: ticketId },
    });
};

const updateTicket = async (ticketId, ticketData) => {
    return await prisma.tickets.update({
        where: { ticket_id: ticketId },
        data: ticketData,
    });
};

const deleteTicket = async (ticketId) => {
    return await prisma.tickets.delete({
        where: { ticket_id: ticketId },
    });
};

const findTicketsByUserId = async (userId) => {
    return await prisma.tickets.findMany({
        where: { user_id: userId },
        include: {
            show: true,
        },
    });
};

const findSeatsByShowId = async (showId) => {
    return await prisma.tickets.findMany({
        where: {
            show_id: parseInt(showId),
        },
        select: {
            seat_number: true
        }
    });
};

const findShow = async (filmTitle, showTime, cinemaDetails) => {
    return await prisma.shows.findFirst({
        where: {
            film_title: {
                equals: filmTitle
            },
            show_time: {
                equals: new Date(showTime)
            },
            cinema_details: {
                equals: cinemaDetails
            }
        }
    });
};

module.exports = {
    findShowById,
    findUserById,
    createTicket,
    updateAvailableSeats,
    findTicketById,
    updateTicket,
    deleteTicket,
    findTicketsByUserId,
    findSeatsByShowId,
    findShow
};