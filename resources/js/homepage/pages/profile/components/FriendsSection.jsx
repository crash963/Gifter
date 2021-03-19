import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
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

    useEffect(() => {
        fetchCurrentUserFriends();
    }, []);

    return (
        <div>
            {friends && friends.map((friend) => <UserBox user={friend} />)}
        </div>
    );
}

export default FriendsSection;
