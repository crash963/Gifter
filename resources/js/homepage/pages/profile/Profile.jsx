import React, { useState } from "react";
import { useEffect } from "react";
import UserBox from "./components/UserBox";

export const CurrentUserContext = React.createContext(null);

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);

    async function fetchCurrentUser() {
        const response = await fetch("/api/current-user");
        const data = await response.json();
        console.log(data);
        setCurrentUser(data);
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <section className="profile">
                <div className="box__container">
                    {currentUser && <UserBox />}
                </div>
            </section>
        </CurrentUserContext.Provider>
    );
}
export default Profile;
