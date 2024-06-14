const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllPayments = async () => {
    return await prisma.payments.findMany({
        include: {
            Ticket: true,
        },
    });
};

const getPaymentById = async (id) => {
    return await prisma.payments.findUnique({
        where: { payment_id: id },
        include: {
            Ticket: true,
        },
    });
};

const createPayment = async (paymentData) => {
    return await prisma.payments.create({
        data: paymentData,
    });
};

const updatePayment = async (id, paymentData) => {
    return await prisma.payments.update({
        where: { payment_id: id },
        data: paymentData,
    });
};

const deletePayment = async (id) => {
    return await prisma.payments.delete({
        where: { payment_id: id },
    });
};

module.exports = {
    getAllPayments,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment,
};
