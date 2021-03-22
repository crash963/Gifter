function FriendSearchResults(props) {
    console.log(props.friend);
    const { photo, first_name, last_name, nickname } = props.friend;

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
            <p lassName="friend-search-result__name">
                {first_name && last_name && `${first_name} ${last_name}`}
            </p>
        </div>
    );
}

export default FriendSearchResults;
