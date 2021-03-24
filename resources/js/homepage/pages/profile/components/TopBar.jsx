import Logout from "./Logout";

function TopBar(props) {
    function changePage(e) {
        props.setCurrentPage(e.target.textContent.toLowerCase());
    }

    return (
        <div className="profile-top-section">
            <div className="logo logo--small profile-top-section__logo">
                Gifter
            </div>
            <div className="profile-top-section__nav">
                <div
                    className={
                        props.currentPage === "my profile"
                            ? "profile-top-section__nav__item profile-top-section__nav__item--active"
                            : "profile-top-section__nav__item"
                    }
                    onClick={changePage}
                >
                    My Profile
                </div>
                <div
                    className={
                        props.currentPage === "friends"
                            ? "profile-top-section__nav__item profile-top-section__nav__item--active"
                            : "profile-top-section__nav__item"
                    }
                    onClick={changePage}
                >
                    Friends
                </div>
                <div
                    className={
                        props.currentPage === "wall"
                            ? "profile-top-section__nav__item profile-top-section__nav__item--active"
                            : "profile-top-section__nav__item"
                    }
                    onClick={changePage}
                >
                    Wall
                </div>
                <div
                    className={
                        props.currentPage === "history"
                            ? "profile-top-section__nav__item profile-top-section__nav__item--active"
                            : "profile-top-section__nav__item"
                    }
                    onClick={changePage}
                >
                    History
                </div>
            </div>
            <Logout />
        </div>
    );
}

export default TopBar;
