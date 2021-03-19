import { useState } from "react";
import FindUser from "./FindUser";

function AddFriendBox() {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(true);
    }

    return (
        <div
            className={`add__friend__box box ${
                isClicked && "add__friend__box--opened"
            }`}
            onClick={handleClick}
        >
            {!isClicked ? (
                <img src="/images/icons/plus.svg" alt="plus_icon-img" />
            ) : (
                <FindUser />
            )}
        </div>
    );
}

export default AddFriendBox;
