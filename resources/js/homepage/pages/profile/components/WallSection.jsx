import { useContext, useEffect, useState } from "react";
import Wishes from "./Wishes";
import { CurrentUserContext } from "../Profile.jsx";
import { set } from "lodash";

function WallSection() {
    const currentUser = useContext(CurrentUserContext);
    const [wishes, setWishes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("all-friends");

    async function fetchFriendsWishes() {
        const response = await fetch(
            `/api/user/${currentUser.id}/friends-wishes/${searchQuery}`
        );
        const data = await response.json();
        console.log(data);
        setWishes(data);
    }

    useEffect(() => {
        fetchFriendsWishes();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        fetchFriendsWishes();
    }

    function handleChange(e) {
        setSearchQuery(e.target.value);
    }

    return (
        <div className="wall">
            <div>Filter by:</div>
            <form method="get" onSubmit={handleSubmit}>
                <label htmlFor="nickname">Nickname</label>
                <input type="text" name="nickname" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <div className="box__container">
                {wishes && <Wishes wishes={wishes} />}
            </div>
        </div>
    );
}

export default WallSection;
