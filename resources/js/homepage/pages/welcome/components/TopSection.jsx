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
            <h1 className="logo logo--big">Gifter</h1>
            <div className="btn__container">
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
            </div>
            {window && (
                <div
                    onClick={(event) => {
                        if (event.target.className === "overlay") {
                            setWindow(null);
                        }
                    }}
                    className="overlay"
                >
                    <div>{window}</div>
                </div>
            )}
        </div>
    );
}

export default TopSection;
