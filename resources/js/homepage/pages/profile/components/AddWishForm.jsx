import { useContext, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function AddWishForm() {
    const currentUser = useContext(CurrentUserContext);

    const [
        { user_id, name, link, photo, description, resolve_date, is_resolved },
        setValues,
    ] = useState({
        user_id: currentUser.id,
        name: "",
        link: "",
        photo: "",
        description: "",
        resolve_date: "",
        is_resolved: false,
    });

    const handleChange = (event) => {
        const allowed_names = [
                "name",
                "link",
                "description",
                "photo",
                "resolve_date",
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };

    return (
        <>
            <form action="post">
                <input type="text" name="name" onChange={handleChange} />
                <input type="url" name="link" onChange={handleChange} />
                <input type="text" name="description" onChange={handleChange} />
                <input type="text" name="photo" onChange={handleChange} />
                <select name="resolve_date" onChange={handleChange}>
                    <option value={currentUser.birthday.slice(5)}>
                        Birthday
                    </option>
                    <option value="other_date">Other Date</option>
                    <option value={null}>No Specific Date</option>
                </select>
                {resolve_date === "other_date" && (
                    <input
                        type="date"
                        name="resolve_date"
                        onChange={handleChange}
                    />
                )}
                <input type="submit" value="Add Wish" />
            </form>
        </>
    );
}

export default AddWishForm;
