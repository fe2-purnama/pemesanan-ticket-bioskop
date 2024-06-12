const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const findUserByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: { email: email },
    });
};

module.exports = {
    findUserByEmail
};