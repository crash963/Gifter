import { useEffect, useState } from "react";

function DisplayComments(props) {
    const [comments, setComments] = useState(null);

    async function fetchComments() {
        const response = await fetch(`/api/comments/${props.wish.id}`);
        const data = await response.json();

        if (response.status === 200) {
            setComments(data);
            console.log(data);
        } else {
            console.log("no comments");
        }
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="comments__container">
            {comments != null &&
                comments.map((comment) => {
                    const user = comment.user;
                    return (
                        <div key={comment.id}>
                            <img
                                src={
                                    comment.user.photo
                                        ? `/images/${comment.user.photo}`
                                        : `/images/profile_pictures/placeholder-profile-pic.jpg`
                                }
                            />
                            <p>
                                <strong>
                                    {user.first_name && user.last_name
                                        ? `${user.first_name} ${user.last_name}`
                                        : `${user.nickname}`}
                                </strong>
                            </p>
                            <p>{comment.text}</p>
                        </div>
                    );
                })}
        </div>
    );
}
export default DisplayComments;
