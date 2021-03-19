import { useState } from "react";

function FindUser() {
    const [nickname, setNickname] = useState("");

    async function fetchUsers() {}

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setNickname(e.target.value);
    }

    return (
        <form action="" method="post" onSubmit={handleSubmit}>
            <label htmlFor="nickname">Nickname: </label>
            <input type="text" name="nickname" onChange={handleChange} />
            <input type="submit" value="find" />
        </form>
    );
}

export default FindUser;
