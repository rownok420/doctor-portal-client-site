import {
    Button,
    Container,
    Grid,
    TextField,
    Typography,
    CircularProgress,
    Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, handleRegisterNewUser, loading, signInUsingGoogle, error } =
        useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert("Your Password didn't match");
            return;
        }
        handleRegisterNewUser(
            loginData.email,
            loginData.password,
            loginData.name,
            location,
            history
        );
    };

    const handleSignInGoogle = () => {
        signInUsingGoogle(location, history);
    };
    return (
        <Box sx={{ mt: 8 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "#11d0dc",
                                    my: 3,
                                    // textAlign: "left",
                                }}
                                variant="h6"
                                component="div"
                            >
                                Register
                            </Typography>
                        </Box>
                        <Box style={{ textAlign: "left" }}>
                            {!loading && (
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        type="text"
                                        name="name"
                                        onChange={handleOnChange}
                                        sx={{ width: "90%", mb: 3 }}
                                        id="standard-basic0"
                                        label="Your Name"
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        type="email"
                                        name="email"
                                        onChange={handleOnChange}
                                        sx={{ width: "90%", mb: 3 }}
                                        id="standard-basic"
                                        label="Your Email"
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        sx={{ width: "90%", mb: 3 }}
                                        id="standard-basic2"
                                        label="Your Password"
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        type="password"
                                        name="password2"
                                        onChange={handleOnChange}
                                        sx={{ width: "90%", mb: 3 }}
                                        id="standard-basic3"
                                        label="Retype Your Password"
                                        variant="standard"
                                        required
                                    />
                                    <Button
                                        sx={{ width: "90%", mb: 2 }}
                                        variant="contained"
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                    <NavLink
                                        to="login"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="text"
                                            sx={{ textAlign: "center" }}
                                        >
                                            Already Registered? Please Login
                                        </Button>
                                    </NavLink>
                                </form>
                            )}
                            <Box sx={{ textAlign: "center", my: 3 }}>
                                <Button
                                    onClick={handleSignInGoogle}
                                    variant="contained"
                                >
                                    Sign in with Google
                                </Button>
                            </Box>
                            {loading && <CircularProgress />}
                            {user?.email && (
                                <Alert severity="success">
                                    User Created Successfully
                                </Alert>
                            )}
                            {error && <Alert severity="error">{error}</Alert>}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{
                                width: "100%",
                            }}
                            src={login}
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;
