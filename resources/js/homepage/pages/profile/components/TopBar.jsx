import Logout from "./Logout";

function TopBar(props) {
    function changePage(e) {
        console.log(e.target);
        props.setCurrentPage(e.target.textContent.toLowerCase());
    }

    return (
        <div className="profile__top__section">
            <Logout />
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
            </div>
        </div>
    );
}

export default TopBar;
