function Login() {
    return (
        <div className="register__form">
            <form method="post" onSubmit={handleSubmit}>
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

                <input type="submit" value="register" />
            </form>
        </div>
    );
}

export default Login;
