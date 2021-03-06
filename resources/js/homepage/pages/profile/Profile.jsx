import React, { useState } from "react";
import { useEffect } from "react";
import FriendsSection from "./components/FriendsSection";
import HistorySection from "./components/HistorySection";
import MyProfile from "./components/MyProfile";

import TopBar from "./components/TopBar";
import WallSection from "./components/WallSection";

export const CurrentUserContext = React.createContext(null);

function Profile() {
    const [currentUser, setCurrentUser] = useState(null);
    const [isNameSet, setIsNameSet] = useState(false);
    const [userBoxClicked, setUserBoxClicked] = useState(false);
    const [currentPage, setCurrentPage] = useState("my profile");
    const [searchQuery, setSearchQuery] = useState("all-friends");

    const [alza, setAlza] = useState("");

    async function fetchCurrentUser() {
        const response = await fetch("/api/current-user");
        let data = null;
        try {
            data = await response.json();
        } catch (err) {
            window.location.href = "/";
            console.error(err);
            return;
        }

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
                <>
                    <TopBar
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
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
                    {currentUser && currentPage === "friends" && (
                        <FriendsSection
                            setCurrentPage={setCurrentPage}
                            setSearchQuery={setSearchQuery}
                        />
                    )}
                    {currentUser && currentPage === "wall" && (
                        <WallSection
                            setSearchQuery={setSearchQuery}
                            searchQuery={searchQuery}
                        />
                    )}
                    {currentUser && currentPage === "history" && (
                        <HistorySection />
                    )}
                </>
            )}
        </CurrentUserContext.Provider>
    );
}
export default Profile;
