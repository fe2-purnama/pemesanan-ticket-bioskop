//req dan res

const express = require('express');

const { getAllMovies, getMovieById, createMovie, deleteMovieById, editMovieById } = require('./movie.service');

const router = express.Router();

const path = require("path");

router.get("/", async (req, res) => {

    const movies = await getAllMovies();

    res.send(movies);
});

router.get("/:id", async (req, res) => {
    try {
        const movieId = parseInt(req.params.id);
        const movie = await getMovieById(parseInt(movieId));

        res.send(movie);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        // Periksa apakah file telah diunggah
        if (req.files === null) {
            return res.status(400).json({ msg: "No File Uploaded" });
        }

        const newMovieData = req.body;
        const file = req.files.file;

        const movie = await createMovie(newMovieData, file, req);

        res.status(201).send({
            data: movie,
            message: "Create movie success"
        });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});



router.delete('/:id', async (req, res) => {
    try {
        const movieId = req.params.id;

        await deleteMovieById(parseInt(movieId));

        res.send("movie deleted")
    } catch (error) {
        res.status(400).send(error.message)
    }
});


router.put('/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        const movieData = req.body;
        
        // Handle file upload if present
        if (req.files && req.files.file) {
            const file = req.files.file;
            const ext = path.extname(file.name);
            const fileName = file.md5 + ext;
            const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

            if (!['.png', '.jpg', '.jpeg'].includes(ext.toLowerCase())) {
                return res.status(422).json({ msg: "Invalid Images" });
            }

            file.mv(`./public/images/${fileName}`, async (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            });

            movieData.image = fileName;
            movieData.url = url;
        }

        const movie = await editMovieById(parseInt(movieId), movieData);

        res.json({
            data: movie,
            message: "edit movie success"
        });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
        const movieData = req.body;
        
        // Handle file upload if present
        if (req.files && req.files.file) {
            const file = req.files.file;
            const ext = path.extname(file.name);
            const fileName = file.md5 + ext;
            const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

            if (!['.png', '.jpg', '.jpeg'].includes(ext.toLowerCase())) {
                return res.status(422).json({ msg: "Invalid Images" });
            }
            if (file.data.length > 5000000) {
                return res.status(422).json({ msg: "Image must be less than 5 MB" });
            }

            file.mv(`./public/images/${fileName}`, async (err) => {
                if (err) return res.status(500).json({ msg: err.message });
            });

            movieData.image = fileName;
            movieData.url = url;
        }

        const movie = await editMovieById(parseInt(movieId), movieData);

        res.json({
            data: movie,
            message: "edit movie success"
        });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});




module.exports = router;