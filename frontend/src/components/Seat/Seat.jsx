import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Seat.css";

const Seat = ({ showId, movieId }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [tickets, setTickets] = useState(
    Array.from({ length: 60 }, (_, index) => ({
      seatNumber: generateSeatCode(index),
      booked: false,
    })).reduce((acc, seat) => {
      acc[seat.seatNumber] = seat;
      return acc;
    }, {})
  );

  const fetchMovieData = async () => {
    try {
      const response = await api.get(`/movies/${movieId}`);
      setMovieTitle(response.data.title);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieData();
    const fetchSeatAvailability = async () => {
      try {
        const response = await api.get(`/ticket/availability/${showId}`);
        const updatedTickets = { ...tickets };
        Object.keys(response.data.seatAvailability).forEach((seatNumber) => {
          if (updatedTickets[seatNumber]) {
            updatedTickets[seatNumber].booked =
              response.data.seatAvailability[seatNumber].booked;
          }
        });
        setTickets(updatedTickets);
      } catch (error) {
        console.error("Error fetching seat availability:", error);
      }
    };

    fetchSeatAvailability();
  }, [showId, tickets]);

  function generateSeatCode(index) {
    const row = String.fromCharCode(65 + Math.floor(index / 10));
    const col = (index % 10) + 1;
    return `${row}${col}`;
  }

  const handleSeatChange = (seatNumber) => {
    if (!tickets[seatNumber].booked) {
      const updatedSelectedSeats = [...selectedSeats];
      const index = updatedSelectedSeats.indexOf(seatNumber);

      if (index !== -1) {
        updatedSelectedSeats.splice(index, 1);
        setAmount(amount - 30000);
      } else {
        updatedSelectedSeats.push(seatNumber);
        setAmount(amount + 30000);
      }

      setSelectedSeats(updatedSelectedSeats);
    }
  };

  const handleBooking = () => {
    navigate("payment", {
      state: {
        selectedSeats: selectedSeats,
        showId: showId,
        movieId: movieId,
      },
    });
  };

  return (
    <div className="center">
      <div className="tickets">
        <div className="ticket-selector">
          <div className="head">
            <h1 className="text-3xl font-bold">{movieTitle}</h1>
          </div>
          <div className="seats">
            <div className="status">
              <div className="item">Tersedia</div>
              <div className="item">Tidak Tersedia</div>
              <div className="item">Kursi Kamu</div>
            </div>
            <div className="all-seats">
              {Object.keys(tickets).map((seatNumber) => (
                <React.Fragment key={seatNumber}>
                  <input
                    type="checkbox"
                    name="tickets"
                    id={`seat-${seatNumber}`}
                    checked={selectedSeats.includes(seatNumber)}
                    onChange={() => handleSeatChange(seatNumber)}
                    disabled={tickets[seatNumber].booked}
                  />
                  <label
                    htmlFor={`seat-${seatNumber}`}
                    className={`seat ${
                      tickets[seatNumber].booked
                        ? "booked"
                        : selectedSeats.includes(seatNumber)
                        ? "selected"
                        : ""
                    }`}
                    title={seatNumber}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="price">
          <div className="total">
            <span>
              Total: <span className="count">{selectedSeats.length}</span> Kursi
            </span>
            <div className="amount">
              Rp{amount.toLocaleString()}{" "}
              {selectedSeats.length > 0 && `(${selectedSeats.join(", ")})`}
            </div>
          </div>
          <button type="button" onClick={handleBooking}>
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seat;
