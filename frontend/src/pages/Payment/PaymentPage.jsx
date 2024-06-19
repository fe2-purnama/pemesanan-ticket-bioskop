import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId, showId, selectedSeats } = location.state;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(selectedSeats);
    const ticketPrice = 30000;
    const serviceCharge = 2000;
    setTotalPrice((ticketPrice + serviceCharge) * selectedSeats.length);
  }, [selectedSeats]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/movies/${movieId}`);
        setMovieTitle(response.data.title);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError("Error fetching movie details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handlePayment = () => {
    navigate("/payment/confirmation", { state: { totalPrice } });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="mt-24 container max-w-screen-lg mx-auto min-w-min">
      <h1 className="text-3xl font-bold mb-6">Pembayaran untuk {movieTitle}</h1>
      <div className="flex justify-between">
        <div>
          <p>{selectedSeats.length} Tiket</p>
          <p>Kursi: {selectedSeats.join(", ")}</p>
          <p>Biaya Layanan: Rp.2000 x {selectedSeats.length}</p>
          <p>Total Harga: Rp.{totalPrice.toLocaleString()}</p>
        </div>
      </div>
      <div className="text-right">
        <button
          type="button"
          className="text-gray-900 w-40 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={handlePayment}
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
