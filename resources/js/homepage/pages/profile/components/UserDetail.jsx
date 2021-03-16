import { useContext } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function UserDetail() {
    const currentUser = useContext(CurrentUserContext).user;

    return <div></div>;
}

export default UserDetail;
