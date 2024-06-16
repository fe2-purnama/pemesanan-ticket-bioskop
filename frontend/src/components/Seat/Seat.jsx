import React, { useState, useEffect } from "react";
import "./Seat.css";

const Seat = () => {
  const [tickets, setTickets] = useState(Array(60).fill(false));
  const [selectedDate, setSelectedDate] = useState("d1");
  const [selectedTime, setSelectedTime] = useState("t1");
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const updatedTickets = tickets.map(() => Math.random() < 0.5);
    setTickets(updatedTickets);
  }, []);

  const handleSeatChange = (index) => {
    const updatedTickets = [...tickets];
    if (!updatedTickets[index]) {
      setCount(count + 1);
      setAmount(amount + 200);
    } else {
      setCount(count - 1);
      setAmount(amount - 200);
    }
    updatedTickets[index] = !updatedTickets[index];
    setTickets(updatedTickets);
  };

  return (
    <div className="center">
      <div className="tickets">
        <div className="ticket-selector">
          <div className="head">
            <div className="title">Movie Name</div>
          </div>
          <div className="seats">
            <div className="status">
              <div className="item">Available</div>
              <div className="item">Booked</div>
              <div className="item">Selected</div>
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
            <div className="amount">{amount}</div>
          </div>
          <button type="button">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Seat;
