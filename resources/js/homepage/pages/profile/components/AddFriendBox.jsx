import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
import FindUser from "./FindUser";
import FriendSearchResults from "./FriendSearchResults";

function AddFriendBox() {
    const currentUser = useContext(CurrentUserContext);
    const [isClicked, setIsClicked] = useState(false);
    const [nickname, setNickname] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    async function fetchUsers() {
        const response = await fetch(`/api/users/search/${nickname}`);
        const searchData = await response.json();
        setSearchResults(searchData);
        console.log(searchData);
    }

    function handleClick() {
        setIsClicked(true);
    }

    return (
        <div
            className={`add__friend__box box ${
                isClicked && "add__friend__box--opened"
            }`}
            onClick={handleClick}
        >
            {!isClicked ? (
                <img src="/images/icons/plus.svg" alt="plus_icon-img" />
            ) : (
                <>
                    <FindUser
                        fetchUsers={fetchUsers}
                        setNickname={setNickname}
                    />
                    <FriendSearchResults />
                </>
            )}
        </div>
    );
}

export default AddFriendBox;
