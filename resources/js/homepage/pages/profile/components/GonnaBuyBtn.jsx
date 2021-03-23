import { useContext, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function GonnaBuyBtn() {
    const currentUser = useContext(CurrentUserContext);
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {}

    return (
        <div className="gonna__buy__container">
            <button className="gonna__buy__button" onClick={handleClick}>
                GONNA BUY IT
            </button>
        </div>
    );
}

export default GonnaBuyBtn;
