import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Loign/Login/Login";
import Register from "./Pages/Loign/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Loign/PrivateRoute/PrivateRoute";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <PrivateRoute exact path="/appointment">
                            <Appointment />
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard">
                            <DashBoard />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
