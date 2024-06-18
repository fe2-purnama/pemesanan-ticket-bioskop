const prisma = require("../db");
const path = require('path');
const fs = require("fs/promises");
const { findMovies, findMovieById, findMovieBySlug, insertMovie, deleteMovie, editMovie } = require("./movie.repository");

const getAllMovies = async () => {
    const movies = await findMovies();
    return movies;
};

const getMovieById = async (id) => {
    const movie = await findMovieById(id);
    if (!movie) {
        throw Error("Movie not found");
    }
    return movie;
};

const getMovieBySlug = async (slug) => {
    const movie = await findMovieBySlug(slug);
    if (!movie) {
        throw Error("Movie not found");
    }
    return movie;
};

const createMovie = async (newMovieData, file, req) => {
    const { title, genre, duration, rating, description, slug } = newMovieData;
    const durationInt = parseInt(duration, 10);
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) {
        throw new Error("Invalid Images");
    }

    await file.mv(`./public/images/${fileName}`);

    const movieData = {
        title,
        image: fileName,
        url,
        genre,
        duration: durationInt,
        rating,
        description,
        slug,
    };

    const movie = await insertMovie(movieData);
    return movie;
};

const deleteMovieById = async (id) => {
    await getMovieById(id);
    await deleteMovie(id);
};

const editMovieById = async (id, movieData, file, req) => {
    const existingMovie = await getMovieById(id);

    let updateData = {
        ...movieData,
        duration: parseInt(movieData.duration, 10),
    };

    if (file) {
        const ext = path.extname(file.name);
        const fileName = file.md5 + ext;
        const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) {
            throw new Error("Invalid Images");
        }

        if (existingMovie.image) {
            const oldImagePath = `../public/images/${existingMovie.image}`;
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        }

        await file.mv(`../public/images/${fileName}`);
        updateData = {
            ...updateData,
            image: fileName,
            url,
        };
    }

    const movie = await editMovie(id, updateData);
    return movie;
};

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieBySlug,
    createMovie,
    deleteMovieById,
    editMovieById,
};
