import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { SeatContext } from "./SeatContext";
import { BookingContext } from "./BookingContext";
import { decodeSeatId } from "../helpers";
const PurchaseModel = () => {
  const [open, setOpen] = useState(false);

  const {
    selectedSeatId,
    status,
    error,
    price,
    actions: { bookingProcess }
  } = useContext(BookingContext);
  console.log(
    "STATUS:",
    status,
    "PRICE",
    price,
    "SelectedSEAT",
    selectedSeatId
  );
  const {
    actions: { markedSeatAsPurchased }
  } = useContext(SeatContext);

  const handleOpenClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [creditCard, setCreditCard] = useState("");
  const [expiration, setExpiration] = useState("");
  const { rowName, seatNum } = decodeSeatId(selectedSeatId);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpenClick}>
        CLICK ME!
      </Button>
      <Dialog
        open={selectedSeatId !== null}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle> PURCHASE TICKET {seatNum} </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have purchase this seat{seatNum} for ${price}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Credit Card"
            type="credit card"
            fullWidth
          ></TextField>
          <TextField
            margin="dense"
            id="name"
            label="Expiration"
            type="Expiration"
            fullWidth
          ></TextField>
          <Button>Pay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PurchaseModel;
