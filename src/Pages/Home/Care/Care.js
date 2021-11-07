import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import treatment from "../../../images/treatment.png";

const Care = () => {
    return (
        <Box style={{ margin: "100px 0" }} sx={{ flexGrow: 1 }}>
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
                            <img
                                src={treatment}
                                style={{
                                    width: "100%",
                                    height: "530px",
                                    objectFit: "cover",
                                    marginBottom: "100px",
                                }}
                                alt=""
                            />
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
                                Exceptional Dental <br /> Care, on Your Terms
                            </Typography>
                            <Typography
                                sx={{
                                    mb: 5,
                                    textAlign: "left",
                                    fontSize: "18px",
                                    lineHeight: 1.4,
                                }}
                                variant="p"
                                component="div"
                                color="text.secondary"
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Esse officiis illo excepturi
                                minus soluta. Maxime facilis esse voluptatem
                                reiciendis labore. Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Vero, quidem.
                                Debitis, ut et in maiores culpa ipsum vitae,
                                unde voluptate ad quae aspernatur quasi
                                consectetur! Excepturi sit molestias neque nisi
                                blanditiis enim minus nobis saepe. Nemo tempore
                                nostrum sed ea, aliquam obcaecati rerum? Eos
                                possimus hic expedita architecto laboriosam
                                vitae.
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

export default Care;
