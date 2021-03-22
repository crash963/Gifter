import CommentsForm from "./CommentsForm";
import DisplayComments from "./DisplayComments";

function Comments(props) {
    return (
        <>
            <CommentsForm wish={props.wish} />
            <DisplayComments wish={props.wish} />
        </>
    );
}

export default Comments;
