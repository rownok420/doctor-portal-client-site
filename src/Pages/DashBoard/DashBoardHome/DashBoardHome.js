import * as React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../Appointments/Appointments";

const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Appointments date={date} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashBoardHome;
