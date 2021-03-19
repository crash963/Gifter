import AddWishBox from "./AddWishBox";
import Logout from "./Logout";
import UserBox from "./UserBox";
import UserDetail from "./UserDetail";
import Wishes from "./Wishes";

function MyProfile(props) {
    return (
        <>
            {(!props.isNameSet || props.userBoxClicked) && (
                <UserDetail
                    fetchCurrentUser={props.fetchCurrentUser}
                    setUserBoxClicked={props.setUserBoxClicked}
                />
            )}
            <Logout />
            <div className="box__container">
                <UserBox setUserBoxClicked={props.setUserBoxClicked} />
                <Wishes isNameSet={props.isNameSet} />
                <AddWishBox />
            </div>
        </>
    );
}

export default MyProfile;
