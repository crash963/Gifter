import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";
import WishBox from "./WishBox.jsx";

function Wishes() {
    const currentUser = useContext(CurrentUserContext).user;
    const [wishes, setWishes] = useState(null);

    async function fetchWishes() {
        const response = await fetch(`/api/user/${currentUser.id}/wishes`);
        const data = await response.json();

        setWishes(data);
    }

    useEffect(() => {
        fetchWishes();
    }, []);

    return (
        <>
            {wishes &&
                wishes.map((wish) => <WishBox key={wish.name} wish={wish} />)}
        </>
    );
}
export default Wishes;
