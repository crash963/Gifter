import { useContext, useEffect, useState } from "react";
import Wishes from "./Wishes";
import { CurrentUserContext } from "../Profile.jsx";
import { set } from "lodash";

function WallSection(props) {
    const currentUser = useContext(CurrentUserContext);
    const [wishes, setWishes] = useState([]);

    async function fetchFriendsWishes() {
        const response = await fetch(
            `/api/user/${currentUser.id}/friends-wishes/${props.searchQuery}`
        );
        const data = await response.json();
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
        if (e.target.value) {
            props.setSearchQuery(e.target.value);
        } else {
            props.setSearchQuery("all-friends");
        }
    }

    return (
        <div className="wall">
            <div className="wall-filter"></div>
            <form
                method="get"
                onSubmit={handleSubmit}
                className="wall-filter__form"
            >
                <label htmlFor="nickname" className="wall-filter__form__label">
                    Filter by nickname:
                </label>
                <input
                    type="text"
                    name="nickname"
                    onChange={handleChange}
                    className="wall-filter__form__input"
                />
                <button type="submit" className="wall-filter__form__submit">
                    Search
                </button>
            </form>
            <div className="box__container">
                {wishes.length !== 0 ? (
                    <Wishes
                        wishes={wishes}
                        fetchFriendsWishes={fetchFriendsWishes}
                    />
                ) : (
                    <h3 className="no_wish_found">
                        Looks like this friend doesn't have any wishes yet 🤔
                    </h3>
                )}
            </div>
        </div>
    );
}

export default WallSection;
