const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllShows = async () => {
    return await prisma.shows.findMany({
        include: {
            Cinema: true,
            Movie: true,
        },
    });
};

const getShowById = async (id) => {
    return await prisma.shows.findUnique({
        where: { show_id: id },
        include: {
            Cinema: true,
            Movie: true,
        },
    });
};

const createShow = async (showData) => {
    return await prisma.shows.create({
        data: showData,
    });
};

const updateShow = async (id, showData) => {
    return await prisma.shows.update({
        where: { show_id: id },
        data: showData,
    });
};

const deleteShow = async (id) => {
    return await prisma.shows.delete({
        where: { show_id: id },
    });
};

module.exports = {
    getAllShows,
    getShowById,
    createShow,
    updateShow,
    deleteShow,
};
