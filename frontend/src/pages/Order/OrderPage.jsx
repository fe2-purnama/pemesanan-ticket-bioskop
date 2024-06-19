import React from "react";
import Seat from "../../components/Seat/Seat";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const { filmTitle, showTime, cinemaDetails, showId, movie_id } =
    location.state;

  const formatShowTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <div className="mt-24 container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{filmTitle}</h1>
        <p className="text-xl">Showtime: {formatShowTime(showTime)}</p>
        <p className="text-xl">Cinema: {cinemaDetails}</p>
        <p className="text-xl hidden">Movie ID: {movie_id}</p>{" "}
      </div>
      <Seat showId={showId} movieId={movie_id} />
    </div>
  );
};

export default OrderPage;
