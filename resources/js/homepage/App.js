import "./App.css";
import Welcome from "./pages/welcome/welcome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
        <Router>
            <Switch>
                <Route path="/welcome" children={<Welcome />} />
            </Switch>
        </Router>
    );
}

export default App;
