import { useContext, useEffect, useState } from "react";
import Wishes from "./Wishes";
import { CurrentUserContext } from "../Profile.jsx";

function WallSection() {
    const currentUser = useContext(CurrentUserContext);
    const [wishes, setWishes] = useState([]);

    async function fetchFriendsWishes() {
        const response = await fetch(
            `/api/user/${currentUser.id}/friends-wishes`
        );
        const data = await response.json();

        setWishes(data);
    }

    useEffect(() => {
        fetchFriendsWishes();
    }, []);

    return <> {wishes && <Wishes wishes={wishes} />} </>;
}

export default WallSection;
