import { useState } from "react";

function AddWishBox() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={`add__wish__box box ${
                isClicked && "add__wish__box__form"
            }`}
            onClick={(e) => {
                e.preventDefault();
                setIsClicked(true);
            }}
        >
            {!isClicked && (
                <img src="/images/icons/plus.svg" alt="plus_icon-img" />
            )}
        </div>
    );
}

export default AddWishBox;
