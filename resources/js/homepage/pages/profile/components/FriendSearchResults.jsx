function FriendSearchResults(props) {
    // console.log(props.friend);
    const { photo, first_name, last_name, nickname, id } = props.friend;

    function handleClick(friendId) {
        console.log(friendId);
        fetch(`/api/friendship/${friendId}`);
    }

    return (
        <div className="user__box friend-search-result">
            <div className="friend-search-result__heading">
                <img
                    src={
                        photo
                            ? `/images/${photo}`
                            : "/images/profile_pictures/placeholder-profile-pic.jpg"
                    }
                    alt="user-img"
                    className="friend-search-result__photo"
                />
                <p className="friend-search-result__nickname">{nickname}</p>
            </div>
            <div className="friend-search-result__content">
                <div
                    onClick={() => handleClick(id)}
                    className="friend-search-result__add"
                >
                    +
                </div>
                <p className="friend-search-result__name">
                    {first_name && last_name && `${first_name} ${last_name}`}
                </p>
            </div>
        </div>
    );
}

export default FriendSearchResults;
