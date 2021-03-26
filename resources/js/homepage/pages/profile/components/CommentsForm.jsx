import { useContext, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function CommentsForm(props) {
    const currentUser = useContext(CurrentUserContext);
    const [commentText, setCommentText] = useState("");

    function handleChange(e) {
        setCommentText(e.target.value);
    }

    async function addComment() {
        let request_data = {
            wish_id: props.wish.id,
            user_id: currentUser.id,
            comment_id: null,
            text: commentText,
        };

        const response = await fetch(`/api/comment/save`, {
            method: "POST",
            body: JSON.stringify(request_data),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });

        const data = await response.json();
        props.fetchComments();
    }

    function handleSubmit(e) {
        e.preventDefault();
        addComment();
        setCommentText("");
    }

    return (
        <form className="comments__form" onSubmit={handleSubmit}>
            <textarea
                name="text"
                cols="30"
                rows="2"
                placeholder="Your comment"
                onChange={handleChange}
                value={commentText}
                className="comments__form-textarea"
            ></textarea>
            <input
                type="submit"
                value="comment"
                className="comments__form-button"
            />
        </form>
    );
}

export default CommentsForm;
