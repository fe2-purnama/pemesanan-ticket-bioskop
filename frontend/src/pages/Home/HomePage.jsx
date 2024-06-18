import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TestimonialSlider from "./TestimonialsSlider";
import Partner from "../../components/Partner";
import api from "../../services/api";

const HomePage = () => {
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

  const nowShowingMovies = movies.filter(
    (movie) => movie.status === "NOW_SHOWING"
  );
  const comingSoonMovies = movies.filter(
    (movie) => movie.status === "COMING_SOON"
  );

  return (
    <>
      {/* Section Sedang Tayang */}
      <section className="container max-w-screen-lg mx-auto min-w-min">
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-bold mb-4">Sedang Tayang</h1>
          {/* Buttons for filtering */}
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Semua
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            XXI
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            CGV
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cinepolis
          </button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center overflow-x-auto">
          {nowShowingMovies.map((movie) => (
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
      </section>

      {/* Section Akan Tayang */}
      <section className="container max-w-screen-lg mx-auto min-w-min">
        <div className="mt-16 mb-8">
          <h1 className="text-4xl font-bold mb-4">Akan Tayang</h1>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {comingSoonMovies.map((movie) => (
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
      </section>

      <Partner />

      <TestimonialSlider />
    </>
  );
};

export default HomePage;
