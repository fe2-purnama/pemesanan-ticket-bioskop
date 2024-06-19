import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { format, parseISO, isSameDay } from "date-fns";

const DetailFilm = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [film, setFilm] = useState(null);
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState("");

  // Function to format selected date
  const formatSelectedDate = () => {
    return new Date(selectedDate).toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Function to format selected time
  const formatSelectedTime = () => {
    return selectedTime
      ? new Date(selectedTime).toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";
  };

  // Function to get cinema details from selected time
  const getCinemaDetailsFromSelectedTime = () => {
    for (const [cinemaName, { cinema, times }] of Object.entries(
      groupedShows
    )) {
      if (times.includes(selectedTime)) {
        return `${cinemaName}, ${cinema.address}, ${cinema.city}, ${cinema.state}`;
      }
    }
    return "";
  };

  // Handler for selecting a time
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Handler for clicking "Book Seats" button
  const handleBuyTicketClick = () => {
    if (!selectedDate || !selectedTime) {
      setError("Silahkan pilih tanggal dan jam tayang");
    } else {
      const selectedShow = shows.find(
        (show) => show.show_time === selectedTime
      );
      if (selectedShow) {
        navigate(`/film/${slug}/order`, {
          state: {
            filmTitle: film.title,
            showId: selectedShow.show_id,
            showTime: selectedTime,
            cinemaDetails: getCinemaDetailsFromSelectedTime(),
            movie_id: film.movie_id,
          },
        });
      }
    }
  };

  // Function to fetch film and shows data
  useEffect(() => {
    const fetchFilmAndShows = async () => {
      try {
        const filmResponse = await api.get(`/movies/slug/${slug}`);
        const movieId = filmResponse.data.movie_id;
        setFilm(filmResponse.data);

        const showsResponse = await api.get(`/shows/movie/${movieId}`);
        setShows(showsResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmAndShows();
  }, [slug]);

  // If loading, display loading message
  if (isLoading) return <div>Loading...</div>;
  // If film data not found, display message
  if (!film) return <div>Film tidak ditemukan</div>;

  // Group shows by cinema for selected date
  const groupedShows = shows.reduce((acc, show) => {
    const showDate = parseISO(show.show_time);
    if (isSameDay(showDate, selectedDate)) {
      const cinemaName = show.Cinema.name;
      if (!acc[cinemaName]) {
        acc[cinemaName] = {
          cinema: show.Cinema,
          times: [],
        };
      }
      acc[cinemaName].times.push(show.show_time);
    }
    return acc;
  }, {});

  // Handler for date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

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
              {/* Display genres */}
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                XXI
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                CGV
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Cinepolis
              </span>
            </div>
            <div className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                {/* Display film details */}
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
              {/* Display summary */}
              <div className="summary mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="font-bold">SUMMARY :</p>
                <p>
                  Location: {getCinemaDetailsFromSelectedTime()} | Date:{" "}
                  {formatSelectedDate()}
                </p>
                <p>
                  Movie: {film.title} | Time: {formatSelectedTime()}
                </p>
              </div>
              {/* Button to book seats */}
              <button
                onClick={handleBuyTicketClick}
                className="middle none center mt-10 w-full rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                Book Seats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section to display showtimes */}
      <section>
        <div className="mb-8">
          <h1 className="text-3xl mb-8 font-bold">Jadwal Tayang</h1>
          <div className="flex space-x-2">
            {[...Array(7)].map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              const day = date.toLocaleDateString("id-ID", {
                weekday: "short",
              });
              const dateNum = date.getDate();
              const month = date.toLocaleDateString("id-ID", {
                month: "short",
              });

              return (
                <span
                  key={i}
                  className={`cursor-pointer bg-gray-100 text-gray-800 text-md font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ${
                    isSameDay(date, selectedDate)
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => handleDateChange(date)}
                >
                  {`${day}, ${dateNum} ${month}`}
                </span>
              );
            })}
          </div>
        </div>

        {/* Display showtimes grouped by cinema */}
        {Object.entries(groupedShows).length === 0 ? (
          <p>Jadwal tayang tidak ditemukan untuk tanggal yang dipilih.</p>
        ) : (
          Object.entries(groupedShows).map(
            ([cinemaName, { cinema, times }]) => (
              <div key={cinemaName} className="my-2">
                <h4 className="text-lg font-bold">{cinema.name}</h4>
                <p className="my-2">
                  {cinema.address}, {cinema.city}, {cinema.state}
                </p>
                <div>
                  {/* Display showtimes */}
                  {times.map((time, index) => (
                    <span
                      key={index}
                      className={`cursor-pointer bg-gray-100 text-gray-800 text-sm font-medium mx-2 px-3 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 ${
                        selectedTime === time ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      {format(parseISO(time), "HH:mm")}
                    </span>
                  ))}
                </div>
              </div>
            )
          )
        )}
      </section>
    </div>
  );
};

export default DetailFilm;
