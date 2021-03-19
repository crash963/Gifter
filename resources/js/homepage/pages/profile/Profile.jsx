import React, { useState } from "react";
import { useEffect } from "react";
import MyProfile from "./components/MyProfile";

export const CurrentUserContext = React.createContext(null);

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isNameSet, setIsNameSet] = useState(false);
    const [userBoxClicked, setUserBoxClicked] = useState(false);
    const [currentPage, setCurrentPage] = useState("myProfile");

    const [alza, setAlza] = useState("");

    async function fetchCurrentUser() {
        const response = await fetch("/api/current-user");
        const data = await response.json();

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
            {currentUser && currentPage === "myProfile" && (
                <section className="profile">
                    <MyProfile
                        isNameSet={isNameSet}
                        setUserBoxClicked={setUserBoxClicked}
                        fetchCurrentUser={fetchCurrentUser}
                        userBoxClicked={userBoxClicked}
                    />
                </section>
            )}
        </CurrentUserContext.Provider>
    );
}
export default Profile;
