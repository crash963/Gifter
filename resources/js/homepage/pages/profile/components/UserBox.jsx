import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function UserBox(props) {
    const currentUser = useContext(CurrentUserContext);
    //setUserBoxClicked

    function handleClick(e) {
        e.preventDefault();
        props.setUserBoxClicked(true);
    }

    return (
        <div className="user__box box" onClick={handleClick}>
            <img
                src={
                    currentUser.photo
                        ? `/images/${currentUser.photo}`
                        : "/images/profile_pictures/placeholder-profile-pic.jpg"
                }
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
