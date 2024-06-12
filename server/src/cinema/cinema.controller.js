const express = require('express');
const router = express.Router();
const { fetchAllCinemas, fetchCinemaById, addCinema, editCinema, removeCinema } = require('./cinema.service');

router.get('/', async (req, res) => {
    try {
        const cinemas = await fetchAllCinemas();
        res.json(cinemas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const cinema = await fetchCinemaById(id);
        res.json(cinema);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const { name, address, city, state } = req.body;
    try {
        const newCinema = await addCinema({ name, address, city, state });
        res.status(201).send({
            data: newCinema,
            message: "Add cinema success"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, address, city, state } = req.body;
    try {
        const updatedCinema = await editCinema(id, { name, address, city, state });
        res.status(201).send({
            data: updatedCinema,
            message: "edit cinema success"
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;
    try {
        const updatedCinema = await editCinema(id, updateData);
        res.json(updatedCinema);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await removeCinema(id);
        res.status(204).send({ message: "berhasil menghapus cinema"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
