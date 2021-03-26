import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
import FindUser from "./FindUser";
import FriendSearchResults from "./FriendSearchResults";

function AddFriendBox(props) {
    const currentUser = useContext(CurrentUserContext);
    const [isClicked, setIsClicked] = useState(false);
    const [nickname, setNickname] = useState("");
    const [searchResults, setSearchResults] = useState(null);

    async function fetchUsers() {
        const response = await fetch(`/api/users/search/${nickname}`);
        const searchData = await response.json();
        setSearchResults(searchData);
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
                <div className="search-result-section">
                    <FindUser
                        fetchUsers={fetchUsers}
                        setNickname={setNickname}
                    />
                    <div className="search-result-container">
                        {searchResults && searchResults.length != 0 ? (
                            searchResults.map((friendSearchResult, index) => (
                                <FriendSearchResults
                                    friend={friendSearchResult}
                                    key={index}
                                    fetchUsers={fetchUsers}
                                    fetchCurrentUserFriends={
                                        props.fetchCurrentUserFriends
                                    }
                                />
                            ))
                        ) : (
                            <div className="search-result-container__no-results">
                                No results
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddFriendBox;
