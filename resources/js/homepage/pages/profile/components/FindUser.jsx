import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function FindUser(props) {
    const currentUser = useContext(CurrentUserContext);

    function handleSubmit(e) {
        e.preventDefault();
        props.fetchUsers();
    }

    function handleChange(e) {
        props.setNickname(e.target.value);
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="nickname">Nickname: </label>
            <input type="text" name="nickname" onChange={handleChange} />
            <input type="submit" value="Find friends" />
        </form>
    );
}

export default FindUser;
