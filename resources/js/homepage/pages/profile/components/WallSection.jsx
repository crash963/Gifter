import { useState } from "react";

function WallSection() {
    const [wishes, setWishes] = useState([]);

    async function fetchFriendsWishes() {
        const response = await fetch("/user/{user_id}/friends-wishes");
        const data = await response.json();

        setWishes(data);
    }

    return <div className=""></div>;
}

export default WallSection;
