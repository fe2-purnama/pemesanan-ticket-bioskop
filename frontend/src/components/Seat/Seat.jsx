import React, { useState, useEffect } from "react";
import "./Seat.css";

const Seat = () => {
  const [tickets, setTickets] = useState(Array(60).fill(false));
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatChange = (index) => {
    const updatedTickets = [...tickets];
    const seatCode = generateSeatCode(index);
    if (!updatedTickets[index]) {
      setCount(count + 1);
      setAmount(amount + 30000);
      setSelectedSeats([...selectedSeats, seatCode]);
    } else {
      setCount(count - 1);
      setAmount(amount - 30000);
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatCode));
    }
    updatedTickets[index] = !updatedTickets[index];
    setTickets(updatedTickets);
  };

  const generateSeatCode = (index) => {
    const row = String.fromCharCode(65 + Math.floor(index / 10)); // Convert to A, B, C, etc.
    const col = (index % 10) + 1; // Convert to 1, 2, 3, etc.
    return `${row}${col}`;
  };

  return (
    <div className="center">
      <div className="tickets">
        <div className="ticket-selector">
          <div className="head">
            <h1 className="text-3xl font-bold">Movie Name</h1>
          </div>
          <div className="seats">
            <div className="status">
              <div className="item">Tersedia</div>
              <div className="item">Tidak Tersedia</div>
              <div className="item">Kursi Kamu</div>
            </div>
            <div className="all-seats">
              {tickets.map((booked, index) => (
                <React.Fragment key={index}>
                  <input
                    type="checkbox"
                    name="tickets"
                    id={`s${index}`}
                    checked={booked}
                    onChange={() => handleSeatChange(index)}
                  />
                  <label
                    htmlFor={`s${index}`}
                    className={`seat ${booked ? "booked" : ""}`}
                    title={generateSeatCode(index)}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="price">
          <div className="total">
            <span>
              <span className="count">{count}</span> Tickets
            </span>
            <div className="amount">
              {amount}{" "}
              {selectedSeats.length > 0 && `(${selectedSeats.join(",")})`}
            </div>
          </div>
          <button type="button">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Seat;
