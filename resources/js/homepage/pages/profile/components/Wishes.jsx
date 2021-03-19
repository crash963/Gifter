// import { useContext, useEffect, useState } from "react";
// import { CurrentUserContext } from "../Profile.jsx";
import WishBox from "./WishBox.jsx";

function Wishes(props) {
    // const currentUser = useContext(CurrentUserContext);
    /* const [wishes, setWishes] = useState(null);

    async function fetchWishes() {
        const response = await fetch(`/api/user/${currentUser.id}/wishes`);
        const data = await response.json();

        setWishes(data);
    }

    useEffect(() => {
        fetchWishes();
    }, []);
 */
    return (
        <>
            {props.wishes &&
                props.wishes.map((wish) => (
                    <WishBox
                        key={wish.name}
                        wish={wish}
                        isNameSet={props.isNameSet}
                    />
                ))}
        </>
    );
}
export default Wishes;
