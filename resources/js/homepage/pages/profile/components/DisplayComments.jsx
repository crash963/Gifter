function DisplayComments(props) {
    return (
        <div className="comments__container">
            {props.comments != null &&
                props.comments.map((comment) => {
                    const user = comment.user;
                    return (
                        <div key={comment.id} className="comment">
                            <div className="comment__header">
                                <img
                                    src={
                                        comment.user.photo
                                            ? `/images/${comment.user.photo}`
                                            : `/images/profile_pictures/placeholder-profile-pic.jpg`
                                    }
                                    className="comment__photo"
                                />
                            </div>
                            <div className="comment__content">
                                <p className="comment__user-id">
                                    <strong>
                                        {user.first_name && user.last_name
                                            ? `${user.first_name} ${user.last_name}`
                                            : `${user.nickname}`}{" "}
                                        wrote:
                                    </strong>
                                </p>
                                <p className="comment__text">{comment.text}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
export default DisplayComments;
