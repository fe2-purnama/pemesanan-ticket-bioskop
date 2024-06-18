const express = require('express');
const { getAllMovies, getMovieById, getMovieBySlug, createMovie, deleteMovieById, editMovieById } = require('./movie.service');
const router = express.Router();
const path = require("path");

router.get("/", async (req, res) => {
    const movies = await getAllMovies();
    res.send(movies);
});

router.get("/:id", async (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movie = await getMovieById(movieId);
        res.send(movie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get("/slug/:slug", async (req, res) => {
    try {
        const slug = req.params.slug;
        const movie = await getMovieBySlug(slug);
        res.send(movie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        if (req.files === null) {
            return res.status(400).json({ msg: "No File Uploaded" });
        }

        const newMovieData = req.body;
        const file = req.files.file;
        const movie = await createMovie(newMovieData, file, req);

        res.status(201).send({
            data: movie,
            message: "Create movie success",
        });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        await deleteMovieById(parseInt(movieId));
        res.send("Movie deleted");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const movieData = req.body;
        const file = req.files ? req.files.file : null;
        const movie = await editMovieById(parseInt(movieId), movieData, file, req);

        res.json({
            data: movie,
            message: "Edit movie success",
        });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const movieData = req.body;
        const file = req.files ? req.files.file : null;
        const movie = await editMovieById(parseInt(movieId), movieData, file, req);

        res.json({
            data: movie,
            message: "Edit movie success",
        });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

module.exports = router;
