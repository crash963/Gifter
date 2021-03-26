import { Input } from "postcss";
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
            <div className="welcome__page--logo-section">
                <h1 className="logo logo--big">Gifter</h1>
                <h4 className="logo logo--tagline">Share the perfect gift</h4>
            </div>
            <div className="btn__container">
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
            </div>
            {window && (
                <div
                    onMouseDown={(event) => {
                        if (event.target.className === "overlay") {
                            setWindow(null);
                        }
                    }}
                    className="overlay"
                >
                    {window}
                </div>
            )}
        </div>
    );
}

export default TopSection;
