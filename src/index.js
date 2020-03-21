import React from "react";
import ReactDOM from "react-dom";
import { SeatProvider } from "./components/SeatContext";
import App from "./components/App";
import { BookingProvider } from "./components/BookingContext";
const rootElement = document.getElementById("root");
///wrapped seatprovider context throughout our app
ReactDOM.render(
  <SeatProvider>
    <BookingProvider>
      <App />
    </BookingProvider>
  </SeatProvider>,
  rootElement
);
