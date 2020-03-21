import React from "react";
import { ReactComponent as SeatStyle } from "../assets/seat-available.svg";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const Seat = ({ rowName, seatIndex, seatStatus, price }) => {
  return (
    <>
      <Tippy content={`Row ${rowName}, Seat ${seatIndex}, ${price}`}>
        <button disabled={seatStatus}>
          <SeatStyle
            style={{ filter: seatStatus ? "grayscale(100%)" : "" }}
          ></SeatStyle>
        </button>
      </Tippy>
    </>
  );
};

export default Seat;
