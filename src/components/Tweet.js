import React from "react";
import { ReactComponent as DownArrowIcon } from "../icons/DownArrowIcon.svg";
import { ReactComponent as ActivityIcon } from "../icons/ActivityIcon.svg";
import { ReactComponent as CommentIcon } from "../icons/CommentIcon.svg";
import { ReactComponent as HeartIcon } from "../icons/HeartIcon.svg";
import { ReactComponent as RetweetIcon } from "../icons/RetweetIcon.svg";
import { ReactComponent as Shareicon } from "../icons/Shareicon.svg";

export const Tweet = ({
  name,
  background,
  text,
  username,
  likes,
  retweets,
  commends,
  date,
  clock,
  img,
}) => {
  return (
    <>
      <div className={`container ${background}`} id="capture">
        <div className="container-header">
          <div className="container-header">
            <img src={img} alt="username" />
            <div className="name">
              <div className="user">{name}</div>
              <div className="username">@{username}</div>
            </div>
          </div>
          <div className="down-arrow">
            <DownArrowIcon />
          </div>
        </div>
        <div className="container-text">{text}</div>
        <div className="container-time">
          <div>{clock}</div>
          <p> • </p>
          <div>{date}</div>
          <p> • </p>
          <div className="platform">Twitter Web App</div>
        </div>
        <div className="sepator" />
        <div className="activity">
          <ActivityIcon />
          <div>View Tweet activity</div>
        </div>
        <div className="sepator" />
        <div className="tweet-activity">
          <div className="like">
            <div className="like-count">{retweets}</div>
            <div className="like-text">Retweets</div>
          </div>
          <div className="like">
            <div className="like-count">{commends}</div>
            <div className="like-text">Quote Tweets</div>
          </div>
          <div className="like">
            <div className="like-count">{likes}</div>
            <div className="like-text">Likes</div>
          </div>
          <div></div>
        </div>
        <div className="sepator" />
        <div className="activity-button">
          <CommentIcon />
          <HeartIcon />
          <RetweetIcon />
          <Shareicon />
        </div>
      </div>
    </>
  );
};

export default Tweet;
