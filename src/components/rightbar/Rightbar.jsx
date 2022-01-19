import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/birthday.jpeg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mr Barskdale</b> and <b>1 other friend</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
