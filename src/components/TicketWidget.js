import React, { useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getRowName, getSeatNum } from "../helpers";
import { range } from "../utils";
import { SeatContext } from "./SeatContext";
import Seat from "./Seat";

const TicketWidget = () => {
  const {
    state: { hasLoaded, seats, numOfRows, seatsPerRow }
  } = useContext(SeatContext);
  if (!hasLoaded) {
    return <CircularProgress />;
  }
  return (
    <Wrapper>
      {range(numOfRows).map(rowIndex => {
        const rowName = getRowName(rowIndex);

        return (
          <Row key={rowIndex}>
            <RowLabel>Row {rowName}</RowLabel>
            {range(seatsPerRow).map(seatIndex => {
              const seatId = `${rowName}-${getSeatNum(seatIndex)}`;
              const seat = seats[seatId];
              return (
                <SeatWrapper key={seatId}>
                  {
                    <Seat
                      rowName={rowName}
                      seatIndex={seatIndex + 1}
                      seatStatus={seat.isBooked}
                      price={seat.price}
                    />
                  }
                </SeatWrapper>
              );
            })}
          </Row>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
`;

const Row = styled.div`
  display: flex;
  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid #ddd;
  }
`;

const RowLabel = styled.div`
  font-weight: bold;
`;
const SeatWrapper = styled.div`
  padding: 5px;
`;

export default TicketWidget;
