const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findUserByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: { email: email },
    });
};

const createUser = async (userData) => {
    return await prisma.users.create({
        data: userData,
    });
};

module.exports = {
    findUserByEmail,
    createUser
};