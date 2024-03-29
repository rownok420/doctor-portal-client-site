import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();

    const initialInfo = {
        patientName: user.displayName,
        email: user.email,
        phone: "",
    };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setBookingInfo(newInfo);
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // collect data
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString(),
        };
        // sent to database
        fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(appointment),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.insertedId){
                    setBookingSuccess(true)
                    handleBookingClose();
                }
            });
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: "95%", my: 2 }}
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "95%", my: 2 }}
                            id="outlined-size-small"
                            defaultValue={user.displayName}
                            size="small"
                            name="patientName"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "95%", my: 2 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "95%", my: 2 }}
                            id="outlined-size-small"
                            defaultValue="Phone number"
                            size="small"
                            name="phone"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: "95%", my: 2 }}
                            disabled
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#00C1D4",
                                py: 1,
                                px: 4,
                                fontWeight: "bold",
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;
