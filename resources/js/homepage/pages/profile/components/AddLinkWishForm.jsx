import { useContext } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function AddLinkWishForm() {
    const currentUser = useContext(CurrentUserContext);

    return (
        <form action="" method="post">
            <label htmlFor="link">Link: </label>
            <input type="url" />
            <label htmlFor="resolve_date"></label>
            <select name="resolve_date">
                <option value={null} selected>
                    No Specific Date
                </option>
                <option value={currentUser.birthday.slice(5)}>Birthday</option>
                <option value="other_date">Other Date</option>
            </select>
            <input type="submit" />
        </form>
    );
}

export default AddLinkWishForm;
