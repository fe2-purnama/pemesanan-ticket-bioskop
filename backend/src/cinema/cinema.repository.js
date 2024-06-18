const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCinemas = async () => {
    return await prisma.cinemas.findMany();
};

const getCinemaById = async (id) => {
    return await prisma.cinemas.findUnique({
        where: { cinema_id: id },
    });
};

const createCinema = async (cinemaData) => {
    return await prisma.cinemas.create({
        data: cinemaData,
    });
};

const updateCinema = async (id, cinemaData) => {
    return await prisma.cinemas.update({
        where: { cinema_id: id },
        data: cinemaData,
    });
};

const deleteCinema = async (id) => {
    // Cari semua show_id yang terkait dengan cinema_id
    const shows = await prisma.shows.findMany({
        where: {
            cinema_id: id
        },
        select: {
            show_id: true
        }
    });

    const showIds = shows.map(show => show.show_id);

    // Hapus entri di tabel Payments yang memiliki show_id terkait
    await prisma.payments.deleteMany({
        where: {
            Ticket: {
                show_id: {
                    in: showIds
                }
            }
        }
    });

    // Hapus entri di tabel Tickets yang memiliki show_id terkait
    await prisma.tickets.deleteMany({
        where: {
            show_id: {
                in: showIds
            }
        }
    });

    // Hapus entri di tabel Shows yang memiliki cinema_id terkait
    await prisma.shows.deleteMany({
        where: {
            cinema_id: id
        }
    });

    // Hapus entri di tabel Cinemas
    return await prisma.cinemas.delete({
        where: { cinema_id: id },
    });
};

module.exports = {
    getAllCinemas,
    getCinemaById,
    createCinema,
    updateCinema,
    deleteCinema,
};
