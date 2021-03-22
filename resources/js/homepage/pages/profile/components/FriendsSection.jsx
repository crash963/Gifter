import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
import AddFriendBox from "./AddFriendBox.jsx";
import UserBox from "./UserBox.jsx";

function FriendsSection() {
    const currentUser = useContext(CurrentUserContext);
    const [friends, setFriends] = useState([]);

    async function fetchCurrentUserFriends() {
        const response = await fetch(`/api/user/${currentUser.id}/friends`);
        const data = await response.json();

        setFriends(data);
        console.log(data);
    }

    /*  function findFriend() {
        setShowFindNewFriend(true);
    } */

    useEffect(() => {
        fetchCurrentUserFriends();
    }, []);

    return (
        <div className="box__container">
            {friends &&
                friends.map((friend, index) => (
                    <UserBox user={friend} key={index} />
                ))}
            <AddFriendBox />
        </div>
    );
}

export default FriendsSection;
