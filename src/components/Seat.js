import React from "react";
import { ReactComponent as SeatStyle } from "../assets/seat-available.svg";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { BookingContext } from "./BookingContext";
import { encodeSeatId } from "../helpers";
const Seat = ({ rowName, seatIndex, seatStatus, price, rowIndex }) => {
  const {
    actions: { beginBookingProcess }
  } = React.useContext(BookingContext);
  const seatId = encodeSeatId(rowIndex, seatIndex);
  return (
    <>
      <Tippy content={`Row ${rowName}, Seat ${seatIndex}, ${price}`}>
        <button
          disabled={seatStatus}
          onClick={() => {
            beginBookingProcess({ seatId, price });
          }}
        >
          <SeatStyle
            style={{ filter: seatStatus ? "grayscale(100%)" : "" }}
          ></SeatStyle>
        </button>
      </Tippy>
    </>
  );
};

export default Seat;
