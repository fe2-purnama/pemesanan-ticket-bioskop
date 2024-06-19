const express = require('express');
const router = express.Router();
const { fetchAllShows, fetchShowById, addShow, editShow, removeShow } = require('./show.service');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all shows
router.get('/', async (req, res) => {
    try {
        const shows = await fetchAllShows();
        res.json(shows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get show by ID
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const show = await fetchShowById(id);
        res.json(show);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/movie/:movieId', async (req, res) => {
  const { movieId } = req.params;
  try {
    const shows = await prisma.shows.findMany({
      where: { movie_id: parseInt(movieId) },
      include: { Cinema: true }
    });
    res.json(shows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching shows' });
  }
});

// Create new show
router.post('/', async (req, res) => {
    const { cinema_id, movie_id, show_time, available_seats } = req.body;
    try {
        const newShow = await addShow({ cinema_id, movie_id, show_time, available_seats });
        res.status(201).json(newShow);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update show
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { cinema_id, movie_id, show_time, available_seats } = req.body;
    try {
        const updatedShow = await editShow(id, { cinema_id, movie_id, show_time, available_seats });
        res.json(updatedShow);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Partially update show
router.patch('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const updateData = req.body;
    try {
        const updatedShow = await editShow(id, updateData);
        res.json(updatedShow);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete show
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await removeShow(id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
