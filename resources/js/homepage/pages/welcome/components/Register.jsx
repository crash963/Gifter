import { useState } from "react";

function Register() {
    const [
        { email, nickname, password, password_confirmation },
        setValues,
    ] = useState({
        email: "",
        nickname: "",
        password: "",
        password_confirmation: "",
    });

    const [message, setMessage] = useState("");

    async function register() {
        let request_data = {
            nickname: nickname,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
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

        setMessage(response_data.errors);
    }

    const handleChange = (event) => {
        const allowed_names = [
                "nickname",
                "email",
                "password",
                "password_confirmation",
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
        console.log(nickname, email, password);
    };

    function handleSubmit(event) {
        event.preventDefault();
        register();
    }

    return (
        <div className="register__form">
            <form method="post" onSubmit={handleSubmit}>
                <label for="nickname">nickname: </label>
                <input type="text" name="nickname" onChange={handleChange} />
                {message.nickname && <p>{message.nickname}</p>}

                <label for="email">email: </label>
                <input type="email" name="email" onChange={handleChange} />
                {message.email && <p>{message.email}</p>}

                <label for="password">password: </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                {message.password && <p>{message.password}</p>}

                <label for="password_confirmation">confirm password</label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={password_confirmation}
                    onChange={handleChange}
                />
                {message.password_confirmation && (
                    <p>{message.password_confirmation}</p>
                )}

                <input type="submit" value="register" />
            </form>
        </div>
    );
}

export default Register;
