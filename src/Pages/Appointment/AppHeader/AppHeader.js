import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import chair from "../../../images/chair.png";
import Calendar from "../../Shared/Calendar/Calendar";

const AppHeader = ({ date, setDate }) => {
    return (
        <Box sx={{ flexGrow: 1, my: 8 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calendar date={date} setDate={setDate} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img style={{ width: "100%" }} src={chair} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppHeader;
