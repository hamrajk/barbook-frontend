import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">BarkBook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar"></div>
        <Search />
        <input
          placeholder="Search for your pals, and what they're up to"
          className="searchInput"
        />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadage">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadage">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadage">3</span>
          </div>
        </div>
        <img src="/assets/People/10.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
