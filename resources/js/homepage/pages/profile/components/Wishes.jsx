// import { useContext, useEffect, useState } from "react";
// import { CurrentUserContext } from "../Profile.jsx";
import WishBox from "./WishBox.jsx";
import { CurrentUserContext } from "../Profile.jsx";
import { useContext } from "react";

function Wishes(props) {
    const currentUser = useContext(CurrentUserContext);

    return (
        <>
            {props.wishes &&
                props.wishes.map((wish) => (
                    <WishBox
                        key={wish.name}
                        wish={wish}
                        isNameSet={props.isNameSet}
                        fetchFriendsWishes={props.fetchFriendsWishes}
                    />
                ))}
        </>
    );
}
export default Wishes;
