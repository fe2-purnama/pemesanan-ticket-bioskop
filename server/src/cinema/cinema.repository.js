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
