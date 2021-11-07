import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import doctor from "../../../images/doctor-small.png";

const Doctor = () => {
    return (
        <Box style={{ marginTop: "150px" }}>
            <Container>
                <Typography
                    sx={{
                        fontWeight: "bold",
                        color: "#11d0dc",
                        mb: 6,
                        textAlign: "center",
                    }}
                    variant="h6"
                    component="div"
                >
                    Our Doctors
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={4} sm={4} md={4}>
                            <Card
                                sx={{ minWidth: 275, boxShadow: 0, border: 0 }}
                            >
                                <CardMedia
                                    component="img"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        margin: "auto",
                                    }}
                                    image={doctor}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{
                                            margin: "5px 0px",
                                            fontWeight: "bold",
                                        }}
                                        variant="h6"
                                        component="div"
                                    >
                                        Dr. Caudi
                                    </Typography>
                                    <Typography
                                        sx={{
                                            margin: "2px 0px",
                                        }}
                                        variant="p"
                                        component="div"
                                    >
                                        + 61 201 301 501
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Card
                                sx={{ minWidth: 275, boxShadow: 0, border: 0 }}
                            >
                                <CardMedia
                                    component="img"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        margin: "auto",
                                    }}
                                    image={doctor}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{
                                            margin: "5px 0px",
                                            fontWeight: "bold",
                                        }}
                                        variant="h6"
                                        component="div"
                                    >
                                        Dr. Caudi
                                    </Typography>
                                    <Typography
                                        sx={{
                                            margin: "2px 0px",
                                        }}
                                        variant="p"
                                        component="div"
                                    >
                                        + 61 201 301 501
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Card
                                sx={{ minWidth: 275, boxShadow: 0, border: 0 }}
                            >
                                <CardMedia
                                    component="img"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        margin: "auto",
                                    }}
                                    image={doctor}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{
                                            margin: "5px 0px",
                                            fontWeight: "bold",
                                        }}
                                        variant="h6"
                                        component="div"
                                    >
                                        Dr. Caudi
                                    </Typography>
                                    <Typography
                                        sx={{
                                            margin: "2px 0px",
                                        }}
                                        variant="p"
                                        component="div"
                                    >
                                        + 61 201 301 501
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Doctor;
