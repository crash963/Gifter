import { useState } from "react";
import AddLinkWishForm from "./AddLinkWishForm";
import AddOwnWishForm from "./AddOwnWishForm";

function AddWishBox(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [wayToAddWish, setWayToAddWish] = useState("link");

    return (
        <div
            className={`add__wish__box box ${
                wayToAddWish === "own" && "add__wish__box__form"
            }`}
            onClick={() => {
                setIsClicked(true);
            }}
        >
            {!isClicked ? (
                <img src="/images/icons/plus.svg" alt="plus_icon-img" />
            ) : (
                <>
                    <div className="wish_method__switch">
                        <button
                            onClick={() => {
                                setWayToAddWish("link");
                            }}
                            className={`wish__method__switch__btn wish__method__switch__btn${
                                wayToAddWish === "link" ? "--active" : ""
                            }`}
                        >
                            Add wish from link
                        </button>
                        <button
                            onClick={() => {
                                setWayToAddWish("own");
                            }}
                            className={`wish__method__switch__btn wish__method__switch__btn${
                                wayToAddWish === "own" ? "--active" : ""
                            }`}
                        >
                            Add wish manually
                        </button>
                    </div>
                    {wayToAddWish === "link" ? (
                        <AddLinkWishForm
                            fetchWishes={props.fetchWishes}
                            setIsClicked={setIsClicked}
                        />
                    ) : (
                        <AddOwnWishForm
                            fetchWishes={props.fetchWishes}
                            setIsClicked={setIsClicked}
                            setWayToAddWish={setWayToAddWish}
                        />
                    )}
                </>
            )}
        </div>
    );
}

/* function AddWishBox(props) {
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
} */

export default AddWishBox;
