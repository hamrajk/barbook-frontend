import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const HomeRightbar = () => {
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

  useEffect(() => {
    const getFriends = async () => {
      console.log(user);
      console.log(user._id);
      const friendList = await axios.get("/users/friends/" + user._id);
      console.log(friendList);
      console.log(friends);
      setFriends((prev) => [...prev, friendList.data]);
    };

    getFriends();
    console.log(friends);
  }, [user]);

  console.log(friends);

  return (
    <>
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
            <div className="rightbarFollowing">
              <p>hi</p>
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
