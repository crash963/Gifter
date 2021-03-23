import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function AddLinkWishForm(props) {
    const currentUser = useContext(CurrentUserContext);
    const [{ user_id, link, resolve_date, is_resolved }, setValues] = useState({
        user_id: currentUser.id,
        link: "",
        resolve_date: null,
        is_resolved: false,
    });
    const [message, setMessage] = useState("");

    async function addLinkWish() {
        let request_data = {
            user_id: user_id,
            link: link,
            resolve_date: resolve_date,
            is_resolved: is_resolved,
        };

        const response = await fetch(`/api/scrape/url`, {
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

        console.log(response);
        const response_data = await response.json();
        console.log(response_data);
        if (response_data.errors) setMessage(response_data.errors);
        props.fetchWishes();
    }

    function handleSubmit(e) {
        e.preventDefault();
        addLinkWish();
    }

    useEffect(() => {
        console.log(message.errors);
    }, []);

    const handleChange = (event) => {
        const allowed_names = ["link", "resolve_date"],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setValues((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit} className="wish_link__box">
            <label htmlFor="link">Link: </label>
            <input
                type="url"
                name="link"
                onChange={handleChange}
                className="url_link__box"
            />
            <div>
                <label htmlFor="resolve_date"></label>
                <select name="resolve_date" onChange={handleChange}>
                    <option value={null} selected>
                        No Specific Date
                    </option>
                    <option value={currentUser.birthday}>Birthday</option>
                    <option value="other_date">Other Date</option>
                </select>
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
            </div>

            <input type="submit" value="Add Wish" />
        </form>
    );
}

export default AddLinkWishForm;
