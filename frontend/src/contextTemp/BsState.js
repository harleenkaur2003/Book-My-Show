import React, { useState, useEffect } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  
  const [errorPopup, setErrorPopup] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [time, changeTime] = useState("");

 
  const [movie, changeMovie] = useState("");

  const [noOfSeat, changeNoOfSeats] = useState({
    A1: 0,
    A2: 0,
    A3: 0,
    B1: 0,
    B2: 0,
    B3: 0,
    C1: 0,
    C2: 0,
    C3: 0
  });
  

  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    const response = await fetch(
      `https://book-my-show-backend-ujbb.onrender.com/api/booking`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
      }
    );

    const data = await response.json();

    setErrorPopup(true);
    setErrorMessage(data.message);

    if (response.status === 200) {
      changeTime("");
      changeMovie("");
      changeNoOfSeats({
        A1: 0,
        A2: 0,
        A3: 0,
        B1: 0,
        B2: 0,
        B3: 0,
        C1: 0,
        C2: 0,
        C3: 0
      });
      setLastBookingDetails(data.data);

      window.localStorage.clear();
    }
  };

  const handleGetLastBooking = async () => {
    const response = await fetch(
      `https://book-my-show-backend-ujbb.onrender.com/api/booking`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    setLastBookingDetails(data.data);
  };

  useEffect(() => {
    try {
      const movie = window.localStorage.getItem("movie");
      const slot = window.localStorage.getItem("slot");
      const seats = window.localStorage.getItem("seats");
  
      if (movie) changeMovie(movie);
      if (slot) changeTime(slot);
      
      if (seats) {
        changeNoOfSeats(JSON.parse(seats));
      }
    } catch (error) {
      console.error("Error parsing seats from localStorage:", error);
      window.localStorage.removeItem("seats"); // Clear invalid data
    }
  }, []);
  

  return (
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
      }}>
      {props.children}
    </BsContext.Provider>
  );
};
export default BsState;
