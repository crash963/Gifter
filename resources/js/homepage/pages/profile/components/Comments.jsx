import CommentsForm from "./CommentsForm";
import DisplayComments from "./DisplayComments";
import { useEffect, useState } from "react";

function Comments(props) {
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
        <>
            <CommentsForm wish={props.wish} fetchComments={fetchComments} />
            {comments && (
                <DisplayComments
                    wish={props.wish}
                    fetchComments={fetchComments}
                    comments={comments}
                />
            )}
        </>
    );
}

export default Comments;
