import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function UserBox() {
    const currentUser = useContext(CurrentUserContext).user;

    return (
        <div className="user__box">
            <div></div>
        </div>
    );
}

export default UserBox;
