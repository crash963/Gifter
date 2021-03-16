import React, { useState } from "react";
import { useEffect } from "react";
import UserBox from "./components/UserBox";
import UserDetail from "./components/UserDetail";

export const CurrentUserContext = React.createContext(null);

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isNameSet, setIsNameSet] = useState(false);

    async function fetchCurrentUser() {
        const response = await fetch("/api/current-user");
        const data = await response.json();
        console.log(data);
        setCurrentUser(data);
    }

    useEffect(() => {
        fetchCurrentUser();
        if (currentUser.first_name && currentUser.last_name) {
            setIsNameSet(true);
        }
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {currentUser && (
                <section className="profile">
                    <div className="box__container">
                        <UserBox />
                        {!isNameSet && <UserDetail />}
                    </div>
                </section>
            )}
        </CurrentUserContext.Provider>
    );
}
export default Profile;
