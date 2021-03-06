import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
import AddWishBox from "./AddWishBox";
import UserBox from "./UserBox";
import UserDetail from "./UserDetail";
import Wishes from "./Wishes";

function MyProfile(props) {
    const currentUser = useContext(CurrentUserContext);
    const [wishes, setWishes] = useState(null);

    async function fetchWishes() {
        const response = await fetch(`/api/user/${currentUser.id}/wishes`);
        const data = await response.json();
        setWishes(data);
    }

    useEffect(() => {
        fetchWishes();
    }, []);

    return (
        <>
            {(!props.isNameSet || props.userBoxClicked) && (
                <UserDetail
                    fetchCurrentUser={props.fetchCurrentUser}
                    setUserBoxClicked={props.setUserBoxClicked}
                />
            )}
            <div className="box__container">
                <UserBox setUserBoxClicked={props.setUserBoxClicked} />
                <AddWishBox fetchWishes={fetchWishes} />
                <Wishes isNameSet={props.isNameSet} wishes={wishes} />
            </div>
        </>
    );
}

export default MyProfile;
