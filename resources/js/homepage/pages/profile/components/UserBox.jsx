import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function UserBox() {
    const currentUser = useContext(CurrentUserContext);

    return (
        <div className="user__box box">
            <img
                src="../images/test-user-photo.jpg"
                alt="user-img"
                className="wish__profile__img"
            />
            <p className="user__box--name">
                {currentUser.first_name && currentUser.last_name
                    ? `${currentUser.first_name} ${currentUser.last_name}`
                    : currentUser.nickname}
            </p>
            <p className="user__box--birthday">
                {currentUser.birthday &&
                    `Birthday: ${currentUser.birthday.slice(5)}`}
            </p>
        </div>
    );
}

export default UserBox;
