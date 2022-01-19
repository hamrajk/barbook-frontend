import "./post.css";
import { MoreVert } from "@material-ui/icons";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/People/10.jpg"
              alt=""
            />
            <span className="postUsername">Azula Khangura</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            Hey! It's Mr Zuley, check out these sweet new bully sticks owner got
            me
          </span>
          <img
            className="postImg"
            src="assets/Posts/bully-sticks.jpeg"
            alt=""
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">69 people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">23 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
