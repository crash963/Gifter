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

    /* useEffect(() => {
        console.log(searchResults);
    }, [searchResults]); */

    return (
        <form action="" method="post" onSubmit={handleSubmit}>
            <label htmlFor="nickname">Nickname: </label>
            <input type="text" name="nickname" onChange={handleChange} />
            <input type="submit" value="find" />
        </form>
    );
}

export default FindUser;
