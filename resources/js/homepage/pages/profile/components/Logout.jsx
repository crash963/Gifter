function Logout() {
    async function logout() {
        const response = await fetch("/logout", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
                "X-Requested-With": "XMLHttpRequest",
            },
        });
        window.location.href = "/";
    }

    return <button onClick={logout}>Logout</button>;
}

export default Logout;
