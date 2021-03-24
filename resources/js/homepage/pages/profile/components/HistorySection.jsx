import Wishes from "./Wishes";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../Profile.jsx";

function HistorySection() {
    const currentUser = useContext(CurrentUserContext);
    const [wishes, setWishes] = useState(null);
    async function fetchResolvedWishes() {
        const response = await fetch(`/api/wish/${currentUser.id}/fulfilled`);
        const data = await response.json();

        setWishes(data);
    }

    useEffect(() => {
        fetchResolvedWishes();
    }, []);

    return (
        <section className="history__section">
            <div className="box__container">
                {wishes && <Wishes wishes={wishes} />}
            </div>
        </section>
    );
}

export default HistorySection;
