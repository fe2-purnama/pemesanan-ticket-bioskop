import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

const FilmPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movies");
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <section className="mt-8 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative"></div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>

      <section className="container max-w-screen-lg mx-auto min-w-min">
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-bold mb-4">Akan Tayang</h1>
          <div className="flex flex-wrap gap-4 justify-center overflow-x-auto">
            {movies
              .filter((movie) => movie.status === "COMING_SOON")
              .map((movie) => (
                <div
                  key={movie.id}
                  className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link to={`/film/${movie.slug}`}>
                    <img
                      className="rounded-t-lg"
                      src={movie.url}
                      alt={movie.title}
                    />
                  </Link>
                  <div className="p-5">
                    <Link to={`/film/${movie.slug}`}>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {movie.title}
                      </h5>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="container max-w-screen-lg mx-auto min-w-min">
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-bold mb-4">Sedang Tayang</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {movies
              .filter((movie) => movie.status === "NOW_SHOWING")
              .map((movie) => (
                <div
                  key={movie.id}
                  className="max-w-60 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link to={`/film/${movie.slug}`}>
                    <img
                      className="rounded-t-lg"
                      src={movie.url}
                      alt={movie.title}
                    />
                  </Link>
                  <div className="p-5">
                    <Link to={`/film/${movie.slug}`}>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {movie.title}
                      </h5>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilmPage;
