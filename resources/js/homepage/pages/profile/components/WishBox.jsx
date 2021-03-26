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
                        <div className="wish__user__info__header">
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
                            <p>{`${author.first_name} ${author.last_name}`}</p>
                        </div>
                        {wish.fulfillers.length !== 0 &&
                            !isUserAuthor &&
                            !isBoxClicked && (
                                <div className="wish__fulfilled__mark">
                                    Wish granted ✔
                                    {/* by {wish.fulfillers[0].nickname} */}
                                </div>
                            )}
                    </div>

                    <button
                        onClick={handleClick}
                        className="hide_detail_toggle"
                    >
                        {isBoxClicked ? "hide details" : "show details"}
                    </button>
                    {!isBoxClicked && (
                        <img
                            className="wish__box--wish-img"
                            src={
                                wish.photo
                                    ? `../images/${wish.photo}`
                                    : `../images/welcome_tile1.jpg`
                            }
                            alt="wish-img"
                        />
                    )}
                    <div className="wish__box--wish">
                        <p>{wish.name}</p>
                        {wish.link && <a href={wish.link}>Buy NOW</a>}
                        {isBoxClicked && (
                            <>
                                <p>{wish.description && wish.description}</p>

                                {wish.resolve_date && !isUserAuthor && (
                                    <p>date: {wish.resolve_date}</p>
                                )}
                            </>
                        )}
                    </div>
                    {!isUserAuthor && isBoxClicked && (
                        <>
                            {wish.fulfillers.length === 0 && (
                                <GonnaBuyBtn
                                    wish={wish}
                                    author={author}
                                    fetchFriendsWishes={
                                        props.fetchFriendsWishes
                                    }
                                />
                            )}
                            <Comments wish={wish} />
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default WishBox;
