import { useState } from "react";

function Login() {
    const [{ email, password }, setValues] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    async function register() {
        let request_data = {
            email: email,
            password: password,
        };

        const response = await fetch("/login", {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
                "X-Requested-With": "XMLHttpRequest",
            },
        });
        const response_data = await response.json();
        if (response_data.errors) setMessage(response_data.errors);
    }

    const handleChange = (event) => {
        const allowed_names = ["email", "password"],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        register();
    }

    return (
        <div className="login__form">
            <form method="post" onSubmit={handleSubmit}>
                <label for="email">email: </label>
                <input type="email" name="email" onChange={handleChange} />
                {message.email && (
                    <p className="warning__message">{message.email}</p>
                )}

                <label for="password">password: </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                {message.password && (
                    <p className="warning__message">{message.password}</p>
                )}

                <button>Register</button>
            </form>
        </div>
    );
}

export default Login;
