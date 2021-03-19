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
            <form action="post" className="form__box">
                <div className="form__box--left">
                    <div>
                        <label htmlFor="name">Product name:</label>
                        <br/>
                        <input type="text" name="name" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="link">URL link (optional):</label>
                        <br/>
                        <input type="url" name="link" onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="photo">Photo (optional):</label>
                        <br/>
                        <input type="text" name="photo" onChange={handleChange} />
                    </div>
                    <div>
                    <label htmlFor="resolve_date"></label>
                    <select name="resolve_date" onChange={handleChange}>
                        <option value={currentUser.birthday.slice(5)}>
                            Birthday
                        </option>
                        <option value="other_date">Other Date</option>
                        <option value={null}>No Specific Date</option>
                    </select>
                    </div>
                    {resolve_date === "other_date" && (
                        <>
                            <label htmlFor="date"></label>
                            <input
                                type="date"
                                name="resolve_date"
                                onChange={handleChange}
                            />
                        </>
                    )}
                    <input type="submit" value="Add Wish" />
                </div>
                <div className="form__box--right">
                    <label htmlFor="description">You can tell your friends anything about this item here:</label>
                    <br/>
                    <textarea name="description" cols="50" rows="20"></textarea>
                </div>
            </form>
        </>
    );
}

export default AddWishForm;
