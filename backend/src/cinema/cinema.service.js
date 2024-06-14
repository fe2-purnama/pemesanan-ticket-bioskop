const { getAllCinemas, getCinemaById, createCinema, updateCinema, deleteCinema } = require('./cinema.repository');

const fetchAllCinemas = async () => {
    return await getAllCinemas();
};

const fetchCinemaById = async (id) => {
    const cinema = await getCinemaById(id);
    if (!cinema) {
        throw new Error('Cinema tidak ditemukan');
    }
    return cinema;
};

const addCinema = async (cinemaData) => {
    return await createCinema(cinemaData);
};

const editCinema = async (id, cinemaData) => {
    await fetchCinemaById(id);
    return await updateCinema(id, cinemaData);
};

const removeCinema = async (id) => {
    await fetchCinemaById(id);
    return await deleteCinema(id);
};

module.exports = {
    fetchAllCinemas,
    fetchCinemaById,
    addCinema,
    editCinema,
    removeCinema,
};
