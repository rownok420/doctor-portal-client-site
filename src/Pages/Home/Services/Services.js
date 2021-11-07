import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";

import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
    {
        name: "Fluoride Treatment",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
        img: fluoride,
    },
    {
        name: "Cavity Filling",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
        img: cavity,
    },
    {
        name: "Teeth Whitening",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas",
        img: whitening,
    },
];

const Services = () => {
    return (
        <div>
            <Container sx={{ my: 5 }}>
                <Typography
                    sx={{ fontWeight: "bold", color: "#11d0dc", my: 1 }}
                    variant="h6"
                    component="div"
                >
                    OUR SERVICE
                </Typography>
                <Typography
                    sx={{ fontWeight: "bold", mb: 8 }}
                    variant="h3"
                    component="div"
                >
                    Service We Provide
                </Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        {services.map((service) => (
                            <Service key={service.name} service={service} />
                        ))}
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Services;
