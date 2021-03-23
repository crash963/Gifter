import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
import Comments from "./Comments.jsx";
import GonnaBuyBtn from "./GonnaBuyBtn.jsx";

function WishBox(props) {
    const currentUser = useContext(CurrentUserContext);
    const wish = props.wish;
    const [author, setAuthor] = useState(null);
    const [isUserAuthor, setIsUserAuthor] = useState(true);
    const [isBoxClicked, setIsBoxClicked] = useState(false);

    async function fetchAuthor() {
        const response = await fetch(`/api/user/${wish.user_id}`);
        const data = await response.json();

        setIsUserAuthor(data.id === currentUser.id);
        setAuthor(data);
    }

    function handleClick() {
        if (isBoxClicked === false) {
            setIsBoxClicked(true);
        } else {
            setIsBoxClicked(false);
        }
    }

    useEffect(() => {
        fetchAuthor();
    }, []);

    return (
        <>
            {author && (
                <div
                    className={`wish__box box ${
                        isBoxClicked && "wish__box--clicked"
                    } ${
                        isBoxClicked &&
                        !isUserAuthor &&
                        "wish__box__with__comments"
                    }`}
                >
                    <div className="wish__user__info">
                        {
                            <img
                                src={
                                    author.photo
                                        ? `../images/${author.photo}`
                                        : `../images/profile_pictures/placeholder-profile-pic.jpg`
                                }
                                alt={`${author.nickname}'s Profile Picture`}
                            />
                        }
                        <p>
                            {props.isNameSet
                                ? `${author.first_name} ${author.last_name}`
                                : author.nickname}
                        </p>
                        {wish.fulfillers.length !== 0 && (
                            <div class="wish__fulfilled__mark">Fulfilled</div>
                        )}
                    </div>
                    <button onClick={handleClick}>
                        {isBoxClicked ? "hide" : "detail"}
                    </button>
                    {!isBoxClicked && (
                        <img
                            src={
                                wish.photo
                                    ? `../images/${wish.photo}`
                                    : `../images/test-wish-photo.jpg`
                            }
                            alt="wish-img"
                        />
                    )}
                    <div className="wish__box--wish">
                        <p>
                            {wish.name}
                            {wish.link && <a href={wish.link}>Buy NOW</a>}
                        </p>
                        {isBoxClicked && (
                            <>
                                <p>{wish.description && wish.description}</p>

                                {wish.resolve_date && !isUserAuthor && (
                                    <p>date: {wish.resolve_date.slice(5)}</p>
                                )}
                            </>
                        )}
                        {!isUserAuthor && isBoxClicked && (
                            <>
                                {wish.fulfillers.length === 0 && (
                                    <GonnaBuyBtn wish={wish} author={author} />
                                )}
                                <Comments wish={wish} />
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default WishBox;
