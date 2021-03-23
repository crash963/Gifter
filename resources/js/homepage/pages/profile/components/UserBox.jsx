import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function UserBox(props) {
    const user = props.user ? props.user : useContext(CurrentUserContext);
    const currentUser = useContext(CurrentUserContext);
    //setUserBoxClicked

    function handleClick(e) {
        e.preventDefault();
        if (currentUser === user) {
            props.setUserBoxClicked(true);
        }
    }

    return (
        <div className="user__box box" onClick={handleClick}>
            <img
                src={
                    user.photo
                        ? `/images/${user.photo}`
                        : "/images/profile_pictures/placeholder-profile-pic.jpg"
                }
                alt="user-img"
                className="wish__profile__img"
            />
            <p className="user__box--name">
                {user.first_name && user.last_name
                    ? `${user.first_name} ${user.last_name}`
                    : user.nickname}
            </p>
            <p className="user__box--birthday">
                {user.birthday && `Birthday: ${user.birthday.slice(5)}`}
            </p>
        </div>
    );
}

export default UserBox;
