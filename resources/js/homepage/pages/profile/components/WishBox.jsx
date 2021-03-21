import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function WishBox(props) {
    const wish = props.wish;
    const [author, setAuthor] = useState(null);

    async function fetchAuthor() {
        const response = await fetch(`/api/user/${wish.user_id}`);
        const data = await response.json();

        setAuthor(data);
    }

    useEffect(() => {
        fetchAuthor();
    }, []);

    return (
        <>
            {author && (
                <div className="wish__box box">
                    <div className="wish__user__info">
                        <img
                            src={
                                author.photo
                                    ? `../images/${author.photo}`
                                    : `../images/profile_pictures/placeholder-profile-pic.jpg`
                            }
                            alt={`${author.nickname}'s Profile Picture`}
                        />
                        <p>
                            {props.isNameSet
                                ? `${author.first_name} ${author.last_name}`
                                : author.nickname}
                        </p>
                    </div>
                    <img
                        src={
                            wish.photo
                                ? `../images/${wish.photo}`
                                : `../images/test-wish-photo.jpg`
                        }
                        alt="wish-img"
                    />
                    <div className="wish__box--wish">
                        <p>
                            {wish.name} {""}
                            {wish.link && <a href={wish.link}>Buy NOW</a>}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default WishBox;
