import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

const HomeRightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="birthdayContainer">
        <img src={`${PF}birthday.jpeg`} alt="" className="birthdayImg" />
        <span className="birthdayText">
          <b>Mr Barskdale</b> and <b>1 other friend</b> have a birthday today
        </span>
      </div>
      <img src={`${PF}ad.jpeg`} alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};
const ProfileRightbar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.following.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      const friendList = await axios.get("/users/friends/" + user._id);

      setFriends(friendList.data);
    };

    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };
  return (
    <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove /> : <Add />}
        </button>
      )}
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City:</div>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">From:</div>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">Relationship:</div>
          <span className="rightbarInfoValue">
            {user.relationship === 1
              ? "Single"
              : user.relationship === 2
              ? "Married"
              : "Empty"}
          </span>
        </div>
      </div>
      <h4 className="rightbarTitle2">User Friends</h4>
      <div className="rightbarFollowings">
        {friends.map((friend) => {
          return (
            <Link
              key={friend._id}
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "avatar-placeholder.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default function Rightbar({ user }) {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar user={user} /> : <HomeRightbar />}
      </div>
    </div>
  );
}
