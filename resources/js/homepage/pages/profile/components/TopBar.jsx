import Logout from "./Logout";

function TopBar(props) {
    function changePage(e) {
        props.setCurrentPage(e.target.textContent.toLowerCase());
    }

    return (
        <div className="profile__top__section">
            <div className="logo logo--small">Gifter</div>
            <div className="profile__navigation">
                <div
                    className="navigation__profile navigation__profile--active"
                    onClick={changePage}
                >
                    My Profile
                </div>
                <div className="navigation__friends" onClick={changePage}>
                    Friends
                </div>
                <div className="navigation__wall" onClick={changePage}>
                    Wall
                </div>
                <div className="navigation__history" onClick={changePage}>
                    History
                </div>
                <Logout />
            </div>
        </div>
    );
}

export default TopBar;
