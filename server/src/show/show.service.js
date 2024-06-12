const { getAllShows, getShowById, createShow, updateShow, deleteShow } = require('./show.repository');

const fetchAllShows = async () => {
    return await getAllShows();
};

const fetchShowById = async (id) => {
    const show = await getShowById(id);
    if (!show) {
        throw new Error('Show tidak ditemukan');
    }
    return show;
};

const addShow = async (showData) => {
    return await createShow(showData);
};

const editShow = async (id, showData) => {
    await fetchShowById(id);
    return await updateShow(id, showData);
};

const removeShow = async (id) => {
    await fetchShowById(id);
    return await deleteShow(id);
};

module.exports = {
    fetchAllShows,
    fetchShowById,
    addShow,
    editShow,
    removeShow,
};
