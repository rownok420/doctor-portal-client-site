import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TextField from "@mui/material/TextField";
import bg from "../../../images/appointment-bg.png";
import TextareaAutosize from '@mui/material/TextareaAutosize';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: 100,
    backgroundColor: "#2F5D62",
    backgroundBlendMode: "darken, luminosity",
};

const Contact = () => {
    return (
        <Box>
            <Box style={appointmentBg}>
                <Container style={{ padding: "80px" }}>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#11d0dc",
                                mb: 1,
                                textAlign: "center",
                            }}
                            variant="h6"
                            component="div"
                        >
                            CONTACT US
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                mb: 8,
                                textAlign: "center",
                                color: "white",
                            }}
                            variant="h3"
                            component="div"
                        >
                            Always Connect With Us
                        </Typography>
                    </Box>
                    <Box>
                        <TextField
                            sx={{
                                width: "65%",
                                mb: 4,
                                backgroundColor: "white",
                            }}
                            placeholder="Email address"
                        />
                        <TextField
                            sx={{
                                width: "65%",
                                mb: 4,
                                backgroundColor: "white",
                            }}
                            placeholder="Subject"
                        />
                        <br />
                        <TextareaAutosize
                            sx={{ backgroundColor: "white"}}
                            style={{ width: "65%", resize: "none", padding: "10px", boxSizing: "border-box"}}
                            minRows={6}
                            placeholder="Your message"
                        />
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;
