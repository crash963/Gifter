import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function UserBox() {
    const value = useContext(CurrentUserContext);
    return <div>user box</div>;
}

export default UserBox;
