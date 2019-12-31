import React from "react";
import "./CommentQnA.scss";

const CommentQnA = ({
  userImg,
  userName,
  userQus,
  userTime,
  onClick,
  hostReply,
  hostTime
}) => {
  const handleReply = () => {
    if (hostReply !== undefined) {
      return (
        <div className="host_reply">
          <p className="host_head">호스트의 답글</p>
          <p className="host_review">{hostReply}</p>
          <p className="host_time">{hostTime}</p>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="user_comment">
      <div className="user_context">
        <img src={userImg} alt="." />
        <p className="user_name">{userName}</p>
        <p className="user_qus">{userQus}</p>
        <div className="comment_time">
          <p>{userTime}</p>
          <div>
            <span>수정 |</span>
            <span className="delete_btn" onClick={onClick}>
              삭제
            </span>
          </div>
        </div>
      </div>
      {handleReply()}
    </div>
  );
};

export default CommentQnA;
