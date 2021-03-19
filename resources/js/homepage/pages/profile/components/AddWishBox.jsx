import { useState } from "react";
import AddWishForm from "./AddWishForm";

function AddWishBox() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={`add__wish__box box ${
                isClicked && "add__wish__box__form"
            }`}
            onClick={(e) => {
                setIsClicked(true);
            }}
        >
            {!isClicked ? (
                <img src="/images/icons/plus.svg" alt="plus_icon-img" />
            ) : (
                <AddWishForm />
            )}
        </div>
    );
}

export default AddWishBox;
