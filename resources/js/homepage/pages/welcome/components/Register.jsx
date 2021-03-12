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

    return (
        <form method="post">
            <label for="nickname">nickname: </label>
            <input type="text" name="nickname" onChange={handleChange} />

            <label for="email">email: </label>
            <input type="email" name="email" onChange={handleChange} />

            <label for="password">password: </label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />

            <label for="password_confirmation">confirm password</label>
            <input
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={handleChange}
            />

            <input type="submit" value="register" />
        </form>
    );
}

export default Register;
