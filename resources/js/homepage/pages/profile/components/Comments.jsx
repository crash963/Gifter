import CommentsForm from "./CommentsForm";

function Comments(props) {
    return (
        <>
            <CommentsForm wish={props.wish} />
            <div className="comments__container"></div>
        </>
    );
}

export default Comments;
