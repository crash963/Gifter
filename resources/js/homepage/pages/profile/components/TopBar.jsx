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
                    className="profile-top-section__nav__item profile-top-section__nav__item--active"
                    onClick={changePage}
                >
                    My Profile
                </div>
                <div
                    className="profile-top-section__nav__item"
                    onClick={changePage}
                >
                    Friends
                </div>
                <div
                    className="profile-top-section__nav__item"
                    onClick={changePage}
                >
                    Wall
                </div>
                <div
                    className="profile-top-section__nav__item"
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
