import { useState } from "react";
import AddWishForm from "./AddWishForm";

function AddWishBox(props) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div
            className={`add__wish__box box ${
                isClicked && "add__wish__box__form"
            }`}
            onClick={() => {
                setIsClicked(true);
            }}
        >
            {!isClicked ? (
                <img src="/images/icons/plus.svg" alt="plus_icon-img" />
            ) : (
                <AddWishForm fetchWishes={props.fetchWishes} />
            )}
        </div>
    );
}

export default AddWishBox;
