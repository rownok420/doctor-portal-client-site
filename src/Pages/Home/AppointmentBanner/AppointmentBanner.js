import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Container, Typography } from "@mui/material";

const appointmentBg = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: 100,
    backgroundColor: "#2F5D62",
    backgroundBlendMode: "darken, luminosity",
};
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1, my: 8 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{
                                width: "100%",
                                height: "500px",
                                marginTop: "-130px",
                            }}
                            src={doctor}
                            alt=""
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#11d0dc",
                                    my: 1,
                                    textAlign: "left",
                                }}
                                variant="h6"
                                component="div"
                            >
                                APPOINTMENT
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "white",
                                    textAlign: "left",
                                    mb: 3
                                }}
                                variant="h3"
                                component="div"
                            >
                                Make an Appointment Today
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "white",
                                    textAlign: "left",
                                    mb: 5
                                }}
                                variant="p"
                                component="div"
                            >
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its...
                            </Typography>
                            <Box sx={{ textAlign: "left" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#00C1D4",
                                        py: 2,
                                        px: 4,
                                        mb: 5,
                                        fontWeight: "bold"
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;
