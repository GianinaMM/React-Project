import { Link } from "react-router-dom";
import styles from "./Newsfeed.module.scss";
import { useRef, useState } from "react";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import CommentBankRoundedIcon from "@mui/icons-material/CommentBankRounded";
import CommentSection from "./Comments/CommentSection";
import BasicMenu from "./BasicMenu";
import HoverIcon from "./HoverIcon";

const COMMENTS = [
  {
    username: "Flavia",
    date: "15.02.2023",
    comment: "First comment",
    id: 0,
  },
  {
    username: "Alina",
    date: "15.02.2023",
    comment: "Second comemnt",
    id: 1,
  },
];

export function Newsfeed(props) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [share, setShares] = useState(Math.floor(Math.random() * 100));

  const [isLiked, setIsLiked] = useState(false);

  const [isShared, setIsShared] = useState(false);

  const [comments, setComments] = useState(COMMENTS);

  const commentDescription = useRef();

  const inputRef = useRef(null);

  const handleLike = () => {
    setIsLiked((prevState) => {
      return !prevState;
    });

    if (isLiked) {
      setLikes((prevState) => {
        return --prevState;
      });
    } else {
      setLikes((prevState) => {
        return ++prevState;
      });
    }
  };

  const handleShare = () => {
    setIsShared((prevState) => {
      return !prevState;
    });

    if (isShared) {
      setShares((prevState) => {
        return --prevState;
      });
    } else {
      setShares((prevState) => {
        return ++prevState;
      });
    }
  };

  const addComment = (event) => {
    if (event.keyCode === 13) {
      const commentValue = commentDescription.current.value;

      setComments((prevState) => {
        const newComment = {
          id: prevState.length,
          username: "Delia" + props.postData.id,
          date: "15.02.2023",
          comment: commentValue,
        };

        return [...prevState, newComment];
      });
    }
  };
  return (
    <>
      <div className={styles.mainPost}>
        <div className={styles.userInfo}>
          <Link to="/user">
            <img
              src={require("./assets/profile.png")}
              alt="Profile Picture"
              className={styles.profilePictureImg}
            ></img>
            <span className={styles.username}>{props.postData.id}</span>
          </Link>
          <div className={styles.contextMenu}>
            <BasicMenu></BasicMenu>
          </div>
        </div>
        <div className={styles.content}>
          <p>{props.postData.title}</p>

          <div className={styles.imageWrapper}>
            <img
              src={require(`./assets/post${props.postData.id % 3}.jpg`)}
              className={styles.mainPostImage}
            ></img>

            <div className={styles.infoIcon}>
              <HoverIcon></HoverIcon>
            </div>
          </div>

          <p className={styles.description}>{props.postData.body}</p>
        </div>

        <div className={styles.reacts}>
          <div className={styles.likesNumber}>
            <ThumbUpAltRoundedIcon
              className={styles.likeIcon}
            ></ThumbUpAltRoundedIcon>
            <span className={styles.reactsCount}>{likes} likes</span>
          </div>
          <div className={styles.commentsNumber}>
            {/* <ReplyRoundedIcon className={styles.shareIcon}></ReplyRoundedIcon> */}
            <span className={styles.reactsCount}>{share} shares</span>
            <ReplyRoundedIcon className={styles.shareIcon}></ReplyRoundedIcon>
          </div>
        </div>

        <hr></hr>

        <div className={styles.reactsActions}>
          <div
            className={`${styles.reaction} ${isLiked && styles.crimson}`}
            onClick={handleLike}
          >
            <ThumbUpAltRoundedIcon></ThumbUpAltRoundedIcon>
            <span>Like</span>
          </div>
          <div
            className={styles.reaction}
            onClick={() => {
              inputRef.current.focus();
            }}
          >
            <CommentBankRoundedIcon></CommentBankRoundedIcon>
            <span>Comment</span>
          </div>
          <div
            className={`${styles.reaction} ${isShared && styles.crimson}`}
            onClick={handleShare}
          >
            <span>Share</span>
            <ReplyRoundedIcon></ReplyRoundedIcon>
            {/* <span>Share</span> */}
          </div>
        </div>

        <hr></hr>

        <div className={styles.commentContainer}>
          <div className={styles.insertCommentField}>
            <input
              type="text"
              placeholder="Type here your comment"
              ref={(commentDescription, inputRef)}
              onKeyUp={addComment}
              className={styles.inputStyle}
            ></input>
          </div>

          {comments &&
            comments.map((comment) => {
              return (
                <CommentSection
                  className={styles.comment}
                  key={comment.id}
                  commentData={comment}
                ></CommentSection>
              );
            })}
        </div>
      </div>
    </>
  );
}
