import React, { useState } from "react";
import { useEffect } from "react";
import FriendsSection from "./components/FriendsSection";
import MyProfile from "./components/MyProfile";

import TopBar from "./components/TopBar";
import WallSection from "./components/WallSection";

export const CurrentUserContext = React.createContext(null);

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isNameSet, setIsNameSet] = useState(false);
    const [userBoxClicked, setUserBoxClicked] = useState(false);
    const [currentPage, setCurrentPage] = useState("my profile");

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

    useEffect(() => {}, [currentPage]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <TopBar setCurrentPage={setCurrentPage} />
            {currentUser && currentPage === "my profile" && (
                <section className="profile">
                    <MyProfile
                        isNameSet={isNameSet}
                        setUserBoxClicked={setUserBoxClicked}
                        fetchCurrentUser={fetchCurrentUser}
                        userBoxClicked={userBoxClicked}
                    />
                </section>
            )}
            {currentUser && currentPage === "friends" && <FriendsSection />}
            {currentUser && currentPage === "wall" && <WallSection />}
        </CurrentUserContext.Provider>
    );
}
export default Profile;
