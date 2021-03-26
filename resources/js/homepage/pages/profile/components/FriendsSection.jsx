import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
import AddFriendBox from "./AddFriendBox.jsx";
import UserBox from "./UserBox.jsx";

function FriendsSection(props) {
    const currentUser = useContext(CurrentUserContext);
    const [friends, setFriends] = useState(null);

    async function fetchCurrentUserFriends() {
        const response = await fetch(`/api/user/${currentUser.id}/friends`);
        const data = await response.json();

        setFriends(data);
    }

    /*  function findFriend() {
        setShowFindNewFriend(true);
    } */

    useEffect(() => {
        fetchCurrentUserFriends();
    }, []);

    return (
        <div className="box__container friends">
            <AddFriendBox fetchCurrentUserFriends={fetchCurrentUserFriends} />
            {friends &&
                friends.map((friend, index) => (
                    <UserBox
                        user={friend}
                        key={index}
                        setCurrentPage={props.setCurrentPage}
                        setSearchQuery={props.setSearchQuery}
                    />
                ))}
        </div>
    );
}

export default FriendsSection;
