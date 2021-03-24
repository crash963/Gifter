import { useContext, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function GonnaBuyBtn(props) {
    const currentUser = useContext(CurrentUserContext);
    const [resolve_date, setResolve_date] = useState("own_resolve_date");
    const [isClicked, setIsClicked] = useState(false);

    async function addFulfiller() {
        const request_data = {
            resolve_date: resolve_date,
        };

        const response = await fetch(
            `/api/wish/fulfillers/add/${props.wish.id}/${currentUser.id}`,
            {
                method: "POST",
                body: JSON.stringify(request_data),
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
            }
        );

        props.fetchFriendsWishes();
    }

    function handleClick() {
        setIsClicked(true);
    }

    function handleChange(e) {
        setResolve_date(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addFulfiller();
        setIsClicked(false);
    }

    return (
        <div className="gonna__buy__container">
            {!isClicked && (
                <button className="gonna__buy__button" onClick={handleClick}>
                    GONNA BUY IT
                </button>
            )}
            {isClicked && (
                <form onSubmit={handleSubmit}>
                    {props.wish.resolve_date && (
                        <select name="resolve_date" onChange={handleChange}>
                            (
                            <option value="own_resolve_date">
                                Add own date
                            </option>
                            <option value={props.wish.resolve_date}>
                                Accept {props.wish.resolve_date.slice(5)}
                            </option>
                            )
                        </select>
                    )}
                    {resolve_date === "own_resolve_date" && (
                        <input
                            type="date"
                            name="resolve_date"
                            onChange={handleChange}
                        />
                    )}
                    <input type="submit" value="confirm" />
                </form>
            )}
        </div>
    );
}

export default GonnaBuyBtn;
