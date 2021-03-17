import React, { useState } from "react";
import { useEffect } from "react";
import UserBox from "./components/UserBox";
import UserDetail from "./components/UserDetail";
import Wishes from "./components/Wishes";

export const CurrentUserContext = React.createContext(null);

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isNameSet, setIsNameSet] = useState(false);

    async function fetchCurrentUser() {
        const response = await fetch("/api/current-user");
        const data = await response.json();
        console.log(data);
        setCurrentUser(data.user);
        checkName(data);
    }

    function checkName(data) {
        if (data.user && data.user.first_name && data.user.last_name) {
            setIsNameSet(true);
        }
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            {currentUser && (
                <section className="profile">
                    {!isNameSet && (
                        <UserDetail fetchCurrentUser={fetchCurrentUser} />
                    )}
                    <div className="box__container">
                        <UserBox />
                        <Wishes isNameSet={isNameSet} />
                    </div>
                </section>
            )}
        </CurrentUserContext.Provider>
    );
}
export default Profile;
