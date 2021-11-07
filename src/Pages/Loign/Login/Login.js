import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, handleLoginUser, loading, signInUsingGoogle, error } =
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
        handleLoginUser(loginData.email, loginData.password, location, history);
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
                                Login
                            </Typography>
                        </Box>
                        <Box style={{ textAlign: "left" }}>
                            {!loading && (
                                <form onSubmit={handleLoginSubmit}>
                                    <TextField
                                        type="email"
                                        name="email"
                                        onChange={handleOnChange}
                                        sx={{ width: "90%", mb: 3 }}
                                        id="standard-basic4"
                                        label="Your Email"
                                        variant="standard"
                                        required
                                    />
                                    <TextField
                                        type="password"
                                        name="password"
                                        onChange={handleOnChange}
                                        sx={{ width: "90%", mb: 3 }}
                                        id="standard-basic5"
                                        label="Your Password"
                                        variant="standard"
                                        required
                                    />
                                    <Button
                                        sx={{ width: "90%", mb: 2 }}
                                        variant="contained"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                    <NavLink
                                        to="register"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="text"
                                            sx={{ textAlign: "center" }}
                                        >
                                            New User? Please Register
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

export default Login;
