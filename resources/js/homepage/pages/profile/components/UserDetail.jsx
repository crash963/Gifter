import PreviousMap from "postcss/lib/previous-map";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function UserDetail(props) {
    const currentUser = useContext(CurrentUserContext);
    const [
        { first_name, last_name, address, photo, birthday },
        setValues,
    ] = useState({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        address: currentUser.address,
        photo: currentUser.photo,
        birthday: currentUser.birthday,
    });
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    async function uploadPhoto() {
        const uploadData = new FormData();
        uploadData.append("picture", file);

        const response = await fetch("/api/upload/profile-picture", {
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
    }

    async function updateUser(photo) {
        let request_data = {
            first_name: first_name,
            last_name: last_name,
            address: address,
            photo: photo,
            birthday: birthday,
        };
        const response = await fetch(`/api/user/${currentUser.id}/update`, {
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
        if (response_data.errors) setMessage(response_data.errors);
        props.fetchCurrentUser();
    }

    const handleChange = (event) => {
        const allowed_names = [
                "first_name",
                "last_name",
                "address",
                "photo",
                "birthday",
            ],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };

    async function handleSubmit(event) {
        event.preventDefault();
        let photo = await uploadPhoto();
        updateUser(photo);
    }

    return (
        <div className="overlay">
            <div className="update__form">
                <form method="post" onSubmit={handleSubmit}>
                    <div>{currentUser.nickname}</div>
                    <label htmlFor="first_name">First name*: </label>
                    <input
                        type="text"
                        name="first_name"
                        value={first_name ? first_name : ""}
                        onChange={handleChange}
                    />
                    {message.first_name && (
                        <p className="warning__message">{message.first_name}</p>
                    )}
                    <label htmlFor="last_name">Last name*: </label>
                    <input
                        type="text"
                        name="last_name"
                        value={last_name ? last_name : ""}
                        onChange={handleChange}
                    />
                    {message.last_name && (
                        <p className="warning__message">{message.last_name}</p>
                    )}
                    <label htmlFor="address">Address: </label>
                    <input
                        type="text"
                        name="address"
                        value={address ? address : ""}
                        onChange={handleChange}
                    />
                    <label htmlFor="photo" hidden>
                        Photo url:{" "}
                    </label>
                    <input
                        type="text"
                        name="photo"
                        value={photo ? photo : ""}
                        onChange={handleChange}
                        hidden
                    />
                    <label htmlFor="file">Profile photo:</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="birthday">Date of birth*: </label>
                    <input
                        type="date"
                        name="birthday"
                        value={birthday ? birthday : ""}
                        onChange={handleChange}
                    />
                    {message.birthday && (
                        <p className="warning__message">{message.birthday}</p>
                    )}
                    <button type="submit">Update user</button>
                </form>
            </div>
        </div>
    );
}

export default UserDetail;
