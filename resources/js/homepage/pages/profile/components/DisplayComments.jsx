function DisplayComments(props) {
    return (
        <div className="comments__container">
            {props.comments != null &&
                props.comments.map((comment) => {
                    const user = comment.user;
                    return (
                        <div key={comment.id} className="comments">
                            <div className="comment__header">
                                <img
                                    src={
                                        comment.user.photo
                                            ? `/images/${comment.user.photo}`
                                            : `/images/profile_pictures/placeholder-profile-pic.jpg`
                                    }
                                    className="comment_photo"
                                />
                                <p className="comment_user_id">
                                    <strong>
                                        {user.first_name && user.last_name
                                            ? `${user.first_name} ${user.last_name}`
                                            : `${user.nickname}`}
                                    </strong>
                                </p>
                            </div>
                            <p className="comment_text">{comment.text}</p>
                        </div>
                    );
                })}
        </div>
    );
}
export default DisplayComments;
