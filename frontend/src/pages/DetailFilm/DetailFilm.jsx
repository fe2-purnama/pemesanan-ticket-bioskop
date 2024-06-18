import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailFilm = () => {
  const { slug } = useParams();
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(
          `http://localhost:2000/movies/slug/${slug}`
        );
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilm();
  }, [slug]);

  if (isLoading) return <div>Loading...</div>;
  if (!film) return <div>Film tidak ditemukan</div>;

  return (
    <div className="mt-24 container max-w-screen-lg mx-auto min-w-min">
      <section className="mb-10 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <a href="#">
            <img className="rounded-lg max-w-60" src={film.url} alt="" />
          </a>
          <div className="col-span-2">
            <h1 className="text-4xl font-bold mb-2">{film.title}</h1>
            <div className="mb-3">
              <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                XXI
              </span>
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                CGV
              </span>
              <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Cinepolis
              </span>
            </div>
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                <b>Genre:</b> {film.genre}
              </p>
              <p>
                <b>Durasi:</b> {film.duration} minutes
              </p>
              <p>
                <b>Sutradara:</b> {film.director}
              </p>
              <p>
                <b>Rating Usia:</b> {film.rating}
              </p>
              <b>Sinopsis</b>
              <p className="mb-2">{film.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-8">
          <h1 className="text-3xl mb-8 font-bold">Jadwal Tayang</h1>
          <div>
            <span className=" bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Hari ini
            </span>
            <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Senin
            </span>
            <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Selasa
            </span>
            <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Rabu
            </span>
            <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Kamis
            </span>
          </div>
        </div>
        <div className="my-2">
          <h4 className="text-lg font-bold">GRAND XXI SOLO</h4>
          <p className="my-2">
            Jl. Slamet Riyadi No.295 Lantai 4, Penumping, Kec. Laweyan, Kota
            Surakarta, Jawa Tengah 57141
          </p>
          <div>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
          </div>
        </div>

        <div className="my-2">
          <h4 className="text-lg font-bold">GRAND XXI SOLO</h4>
          <p className="my-2">
            Jl. Slamet Riyadi No.295 Lantai 4, Penumping, Kec. Laweyan, Kota
            Surakarta, Jawa Tengah 57141
          </p>
          <div>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
          </div>
        </div>

        <div className="my-2">
          <h4 className="text-lg font-bold">GRAND XXI SOLO</h4>
          <p className="my-2">
            Jl. Slamet Riyadi No.295 Lantai 4, Penumping, Kec. Laweyan, Kota
            Surakarta, Jawa Tengah 57141
          </p>
          <div>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
            <span class="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              08.30
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailFilm;
