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

    /*   const [file, setFile] = useState(null);

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
        console.log(response_data);
        setValues((prev_values) => {
            return { ...prev_values, photo: response_data };
        });
        return response_data;
    } */

    async function addWish() {
        let request_data = {
            name: name,
            link: link,
            photo: photo,
            description: description,
            resolve_date: resolve_date,
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
        console.log(response);
        if (response_data.errors) setMessage(response_data.errors);
        //props.fetchCurrentUser();
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

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };
    function handleSubmit(event) {
        event.preventDefault();
        console.log("hello");
        // let photo = await uploadPhoto();
        addWish();
    }

    return (
        <form method="post" className="form__box">
            <div className="form__box--left">
                <div>
                    <label htmlFor="name">Product name:</label>
                    <br />
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="link">URL link (optional):</label>
                    <br />
                    <input type="url" name="link" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="photo">Photo (optional):</label>
                    <br />
                    <input type="text" name="photo" onChange={handleChange} />
                </div>
                <label htmlFor="file">Add photo of the wish:</label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
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
                <label htmlFor="description">Description:</label>
                <br />
                <textarea name="description" cols="30" rows="10"></textarea>
            </div>
        </form>
    );
}

export default AddWishForm;
