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
                    <div>
                        <div
                            className="add__wish__from__link"
                            onClick={() => {
                                setWayToAddWish("link");
                            }}
                        >
                            Create wish from link
                        </div>
                        <div
                            className="add__my__own__wish"
                            onClick={() => {
                                setWayToAddWish("own");
                            }}
                        >
                            Create my own wish
                        </div>
                    </div>
                    {wayToAddWish === "link" ? (
                        <AddLinkWishForm fetchWishes={props.fetchWishes} />
                    ) : (
                        <AddOwnWishForm fetchWishes={props.fetchWishes} />
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
