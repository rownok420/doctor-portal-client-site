import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';

const Service = ({ service }) => {
    const { name, description, img } = service;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0, border: 0 }}>
                <CardMedia
                    component="img"
                    style={{width: "auto", height: "80px", margin: "auto"}}
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{margin: "20px 0px", fontWeight: "bold"}} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;
