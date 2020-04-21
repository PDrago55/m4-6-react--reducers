import React, { useContext, useEffect } from "react";
import { SeatContext } from "./SeatContext";
import GlobalStyles from "./GlobalStyles";
import TicketWidget from "./TicketWidget";
import PurchaseModal from "./PurchaseModal";
function App() {
  const {
    state: { numOfRows },
    actions: { receiveSeatInfoFromServer }
  } = useContext(SeatContext);

  useEffect(() => {
    fetch("/api/seat-availability")
      .then(res => res.json())
      .then(data => receiveSeatInfoFromServer(data));
  }, []);
  return (
    <>
      <GlobalStyles />
      Hello: This Venue has {numOfRows} Rows!
      <TicketWidget />
      <PurchaseModal />
    </>
  );
}

export default App;
