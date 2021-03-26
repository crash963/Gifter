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
        <form
            method="post"
            onSubmit={handleSubmit}
            className="search-result-section__form"
        >
            <label
                htmlFor="nickname"
                className="search-result-section__form__label"
            >
                Nickname:{" "}
            </label>
            <input
                type="text"
                name="nickname"
                onChange={handleChange}
                className="search-result-section__form__input"
            />
            <input
                type="submit"
                value="Find friends"
                className="search-result-section__form__submit"
            />
        </form>
    );
}

export default FindUser;
