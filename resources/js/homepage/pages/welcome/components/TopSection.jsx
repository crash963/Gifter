import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function TopSection() {
    const [window, setWindow] = useState(null);

    function handleLogin() {
        setWindow(<Login />);
    }

    function handleRegister() {
        setWindow(<Register />);
    }

    return (
        <div className="welcome__page--top-section">
            <div className="btn__container">
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
            </div>
            <div>{window && window}</div>
        </div>
    );
}

export default TopSection;
