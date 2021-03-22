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

    function findFriend() {
        setShowFindNewFriend(true);
    }

    useEffect(() => {
        fetchCurrentUserFriends();
    }, []);

    return (
        <div className="friends__box box">
            {friends && friends.map((friend) => <UserBox user={friend} />)}
            <AddFriendBox />
        </div>
    );
}

export default FriendsSection;
