function TopSection() {
    function handleLogin() {}

    function handleRegister() {}

    return (
        <div className="welcome__page--top-section">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default TopSection;
