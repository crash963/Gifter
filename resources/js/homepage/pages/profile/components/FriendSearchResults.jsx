function FriendSearchResults(props) {
    // console.log(props.friend);
    const { photo, first_name, last_name, nickname, id } = props.friend;

    async function addFriend() {
        const response = await fetch(`/api/friendship/${id}`, {
            method: "POST",
            // body: JSON.stringify(id),
            headers: {
                Accept: "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });
        const data = await response.json();
        console.log(data);
    }

    function handleClick() {
        console.log(id);
        addFriend();
        props.fetchCurrentUserFriends();
        props.fetchUsers();
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
                <div className="friend-search-result__names">
                    <p className="friend-search-result__nickname">{nickname}</p>
                    <p className="friend-search-result__name">
                        {first_name &&
                            last_name &&
                            `${first_name} ${last_name}`}
                    </p>
                </div>
            </div>
            <div className="friend-search-result__content">
                <div
                    onClick={() => handleClick()}
                    className="friend-search-result__add"
                >
                    +
                </div>
            </div>
        </div>
    );
}

export default FriendSearchResults;
