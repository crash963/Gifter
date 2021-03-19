import { useContext } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function WishBox(props) {
    const currentUser = useContext(CurrentUserContext);
    const wish = props.wish;

    return (
        <div className="wish__box box">
            <div className="wish__user__info">
                <img
                    src={
                        currentUser.photo
                            ? `../images/${currentUser.photo}`
                            : `../images/profile_pictures/placeholder-profile-pic.jpg`
                    }
                    alt={`${currentUser.nickname}'s Profile Picture`}
                />
                <p>
                    {props.isNameSet
                        ? `${currentUser.first_name} ${currentUser.last_name}`
                        : currentUser.nickname}
                </p>
            </div>
            <img src="../images/test-wish-photo.jpg" alt="wish-img" />
            <div className="wish__box--wish">
                <p>
                    {wish.name} {""}
                    {wish.link && <a href={wish.link}>Buy NOW</a>}
                </p>
            </div>
        </div>
    );
}

export default WishBox;
