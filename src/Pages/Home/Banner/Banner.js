import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";

const  bannerbg = {
    background: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "80vh"
}

const Banner = () => {
    return (
        <Box style={bannerbg} sx={{ flexGrow: 1, my: 10 }}>
            <Container>
                <Grid container spacing={2}>
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
                                    mb: 4,
                                    textAlign: "left",
                                }}
                                variant="h3"
                                component="div"
                            >
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 5,
                                    textAlign: "left",
                                }}
                                variant="p"
                                component="div"
                                color="text.secondary"
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Esse officiis illo excepturi
                                minus soluta. Maxime facilis esse voluptatem
                                reiciendis labore.
                            </Typography>
                            <Box sx={{ textAlign: "left" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#00C1D4",
                                        py: 2,
                                        px: 4,
                                        mb: 5,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Get Appointment
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "500px"
                        }}
                    >
                        <Box>
                            <img src={chair} style={{ width: "100%" }} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;
