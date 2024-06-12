// berkomunikasi dengan database

const prisma = require("../db");

const findMovies = async () => {
    const movies = await prisma.movies.findMany();

    return movies;
}

const findMovieById = async (movie_id) => {
    const movie = await prisma.movies.findUnique({
        where:{
            movie_id,
        },
    });
    return movie;
};

const insertMovie = async (movieData) => {
    const movie = await prisma.movies.create({
        data: movieData,
    });
    return movie;
};

const deleteMovie = async (movie_id) => {
    await prisma.movies.delete({
        where: {
            movie_id,
        },
    });
};

const editMovie = async (id, movieData) => {
    const movie = await prisma.movies.update({
        where: {
            movie_id: parseInt(id),
        },
        data: {
            title: movieData.title,
            genre: movieData.genre,
            duration: movieData.duration,
            rating: movieData.rating,
            description: movieData.description,
            image: movieData.image,
            url: movieData.url
        },
    });
    return movie;
};

module.exports = {
    findMovies,
    findMovieById,
    insertMovie,
    deleteMovie,
    editMovie
};