import "./App.css";
import Welcome from "./pages/welcome/welcome.jsx";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Profile from "./pages/profile/Profile";

function App() {
    async function register() {
        let request_data = {
            nickname: "Slavo",
            email: "slavo@kozar.sk",
            password: "secretSecret",
            password_confirmation: "secretSecret",
        };

        const response = await fetch("/register", {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const response_data = await response.json();

        console.log(response_data);
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" children={<Welcome />} />
                <Route path="/profile" children={<Profile />} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
