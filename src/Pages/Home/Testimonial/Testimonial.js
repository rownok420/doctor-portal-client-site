import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {
    return (
        <Box style={{ margin: "100px 0" }}>
            <Container>
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
                            textAlign: "left",
                            mb: 3,
                        }}
                        variant="h3"
                        component="div"
                    >
                        What's Our Patients <br /> Says
                    </Typography>
                </Box>
                <Box style={{ marginTop: "80px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                style={{ height: "100%" }}
                                elevation={3}
                                sx={{ py: 3 }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        textAlign: "justify",
                                        px: 3,
                                    }}
                                    variant="p"
                                    gutterBottom
                                    component="div"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat totam veniam
                                    repudiandae eos amet quibusdam molestias
                                    animi, dolorum modi exercitationem. Corporis
                                    blanditiis accusamus fugit voluptatum
                                    impedit molestiae sapiente error veritatis.
                                </Typography>
                                <Box sx={{ mt: 5 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            // alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <img src={people1} alt="" />
                                        </Box>
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
                                                Winson Herry
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    my: 1,
                                                    textAlign: "left",
                                                }}
                                                color="text.secondary"
                                                variant="p"
                                                component="div"
                                            >
                                                California
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                style={{ height: "100%" }}
                                elevation={3}
                                sx={{ py: 3 }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        textAlign: "justify",
                                        px: 3,
                                    }}
                                    variant="p"
                                    gutterBottom
                                    component="div"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat totam veniam
                                    repudiandae eos amet quibusdam molestias
                                    animi, dolorum modi exercitationem. Corporis
                                    blanditiis accusamus fugit voluptatum
                                    impedit molestiae sapiente error veritatis.
                                </Typography>
                                <Box sx={{ mt: 5 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            // alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <img src={people2} alt="" />
                                        </Box>
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
                                                Winson Herry
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    my: 1,
                                                    textAlign: "left",
                                                }}
                                                color="text.secondary"
                                                variant="p"
                                                component="div"
                                            >
                                                California
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper
                                style={{ height: "100%" }}
                                elevation={3}
                                sx={{ py: 3 }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        textAlign: "justify",
                                        px: 3,
                                    }}
                                    variant="p"
                                    gutterBottom
                                    component="div"
                                    color="text.secondary"
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quaerat totam veniam
                                    repudiandae eos amet quibusdam molestias
                                    animi, dolorum modi exercitationem. Corporis
                                    blanditiis accusamus fugit voluptatum
                                    impedit molestiae sapiente error veritatis.
                                </Typography>
                                <Box sx={{ mt: 5 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            // alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <img src={people3} alt="" />
                                        </Box>
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
                                                Winson Herry
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    my: 1,
                                                    textAlign: "left",
                                                }}
                                                color="text.secondary"
                                                variant="p"
                                                component="div"
                                            >
                                                California
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonial;
