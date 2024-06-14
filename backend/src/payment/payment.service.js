const { getAllPayments, getPaymentById, createPayment, updatePayment, deletePayment } = require('./payment.repository');

const fetchAllPayments = async () => {
    return await getAllPayments();
};

const fetchPaymentById = async (id) => {
    const payment = await getPaymentById(id);
    if (!payment) {
        throw new Error('Payment tidak ditemukan');
    }
    return payment;
};

const addPayment = async (paymentData) => {
    return await createPayment(paymentData);
};

const editPayment = async (id, paymentData) => {
    await fetchPaymentById(id);
    return await updatePayment(id, paymentData);
};

const removePayment = async (id) => {
    await fetchPaymentById(id);
    return await deletePayment(id);
};

module.exports = {
    fetchAllPayments,
    fetchPaymentById,
    addPayment,
    editPayment,
    removePayment,
};
