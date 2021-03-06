import { set } from "lodash";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function AddOwnWishForm(props) {
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
        resolve_date: null,
        is_resolved: false,
    });
    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);
    const [otherDate, setOtherDate] = useState("");

    function resetValues() {
        setValues({
            user_id: currentUser.id,
            name: "",
            link: "",
            photo: "",
            description: "",
            resolve_date: null,
            is_resolved: false,
        });
    }

    async function uploadPhoto() {
        const uploadData = new FormData();
        uploadData.append("picture", file);

        const response = await fetch("/api/upload/wish-picture", {
            method: "POST",
            body: uploadData,
            headers: {
                Accept: "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });

        const response_data = await response.text();
        if (response_data) {
            setValues((prev_values) => {
                return { ...prev_values, photo: response_data };
            });
        }
        return response_data;
    }

    async function addWish(photo) {
        let request_data = {
            user_id: currentUser.id,
            name: name,
            link: link,
            photo: photo,
            description: description,
            resolve_date:
                resolve_date === "other_date" ? otherDate : resolve_date,
            is_resolved: is_resolved,
        };
        const response = await fetch(`/api/add-wish`, {
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
        const response_data = await response.json();
        if (response_data.errors) {
            setMessage(response_data.errors);
        } else {
            props.setIsClicked(false);
            props.setWayToAddWish("link");
            resetValues();
            props.fetchWishes();
        }
    }

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

        if (name === "own_resolve_date") {
            setOtherDate(value);
            return;
        }

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };
    async function handleSubmit(event) {
        event.preventDefault();
        let photo = await uploadPhoto();
        addWish(photo);
    }

    return (
        <form method="post" className="wish_form__box" onSubmit={handleSubmit}>
            <div className="form__box--left">
                <div>
                    <label htmlFor="name">Product name:</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        className="product_name__box"
                    />
                    {message.name && (
                        <p className="warning__message">{message.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="link">URL link (optional):</label>
                    <br />
                    <input
                        type="url"
                        name="link"
                        onChange={handleChange}
                        className="product_link__box"
                    />
                </div>
                <div>
                    <label htmlFor="file">
                        Add photo of the wish (optional):
                    </label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div>
                    <label htmlFor="resolve_date">Date:</label>
                    <select name="resolve_date" onChange={handleChange}>
                        <option value={currentUser.birthday}>Birthday</option>
                        <option value="other_date">Other Date</option>
                        <option value={null} selected>
                            No Specific Date
                        </option>
                    </select>
                </div>
                {resolve_date === "other_date" && (
                    <>
                        <label htmlFor="date"></label>
                        <input
                            type="date"
                            name="own_resolve_date"
                            onChange={handleChange}
                        />
                    </>
                )}
                <input type="submit" value="Add Wish" />
            </div>
            <div className="form__box--right">
                <label htmlFor="description">Description:</label>
                <br />
                <textarea
                    name="description"
                    cols="40"
                    rows="10"
                    onChange={handleChange}
                ></textarea>
                {message.description && (
                    <p className="warning__message">{message.description}</p>
                )}
            </div>
        </form>
    );
}

export default AddOwnWishForm;
