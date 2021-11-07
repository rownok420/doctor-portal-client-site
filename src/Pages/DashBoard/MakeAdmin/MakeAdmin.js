import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };
    const handleAdminSubmit = (e) => {
        e.preventDefault();
        const users = { email };
        // sent to database
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(users),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });
    };
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: "50%", mb: 5 }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <br />
                <Button type="submit" variant="contained">
                    Make Admin
                </Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;




// import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams,
//     useRouteMatch,
// } from "react-router-dom";
// import DashBoardHome from "../DashBoardHome/DashBoardHome";
// import MakeAdmin from "../MakeAdmin/MakeAdmin";

// // Since routes are regular React components, they
// // may be rendered anywhere in the app, including in
// // child elements.
// //
// // This helps when it's time to code-split your app
// // into multiple bundles because code-splitting a
// // React Router app is the same as code-splitting
// // any other React app.

// export default function DashBoard() {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/topics">Topics</Link>
//                     </li>
//                 </ul>

//                 <hr />

//                 <Switch>
//                     <Route exact path="/">
//                         <Home />
//                     </Route>
//                     <Route path="/topics">
//                         <Topics />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// function Home() {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }

// function Topics() {
//     // The `path` lets us build <Route> paths that are
//     // relative to the parent route, while the `url` lets
//     // us build relative links.
//     let { path, url } = useRouteMatch();

//     return (
//         <div>
//             <h2>Topics</h2>
//             <ul>
//                 <li>
//                     <Link to={`${url}`}>Rendering with React</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/makeAdmin`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/props-v-state`}>Props v. State</Link>
//                 </li>
//             </ul>

//             <Switch>
//                 <Route exact path={path}>
//                     <DashBoardHome />
//                 </Route>
//                 <Route path={`${path}/makeAdmin`}>
//                     <MakeAdmin />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

// function Topic() {
//     // The <Route> that rendered this component has a
//     // path of `/topics/:topicId`. The `:topicId` portion
//     // of the URL indicates a placeholder that we can
//     // get from `useParams()`.
//     let { topicId } = useParams();

//     return (
//         <div>
//             <h3>{topicId}</h3>
//         </div>
//     );
// }
