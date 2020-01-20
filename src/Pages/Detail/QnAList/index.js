import React, { Component } from "react";
import fetchData from "../../../Utils/fetch";
import PageMove from "../PageMove";
import CommentQnA from "../CommentQnA";
import "./QnAList.scss";

class QnAList extends Component {
  state = {
    comment: [],
    inputComment: "",
    currentPage: 1,
    postPerpage: 3
  };

  handleMoveBtn = value => {
    this.setState({
      currentPage: value
    });
  };

  handlePage = number => {
    this.setState({
      currentPage: number
    });
  };

  handleChange = e => {
    this.setState({
      inputComment: e.target.value
    });
  };

  handleInsert = () => {
    const userComment = [
      {
        userImg: "https://ssl.pstatic.net/static/pwe/address/img_profile.png", // 로그인한 유저정보
        userName: "아니저개",
        userQus: this.state.inputComment,
        userTime: "2019.12.27 09:46:02"
      }
    ];
    if (this.state.inputComment.length > 1) {
      const newArr = userComment.concat(this.state.comment);
      this.setState({
        comment: newArr,
        inputComment: ""
      });
    }
  };

  handleFixed = index => {};

  handleDelete = index => {
    const result = this.state.comment.filter(
      (el, indexNum) => indexNum !== index
    );
    this.setState({
      comment: result
    });
  };

  componentDidMount() {
    fetchData("http://localhost:3000/data/data.json").then(res => {
      this.setState({
        comment: res.detailQnA
      });
    });
  }

  render() {
    const { comment, inputComment, currentPage, postPerpage } = this.state;
    const { handleChange, handleInsert, handlePage, handleMoveBtn } = this;
    const indexOfLast = currentPage * postPerpage;
    const indexOfFirst = indexOfLast - postPerpage;
    const currentComment = comment.slice(indexOfFirst, indexOfLast);

    const userQnA = currentComment.map((el, index) => (
      <CommentQnA
        key={index}
        userImg={el.userImg}
        userName={el.userName}
        userQus={el.userQus}
        userTime={el.userTime}
        hostReply={el.hostReply}
        hostTime={el.hostTime}
        onClick={() => {
          this.handleDelete(index);
        }}
      />
    ));
    return (
      <>
        <div className="h_intro">
          Q&A
          <span className="comment_count">{this.state.comment.length}개</span>
          <a href="#q_pop" className="write_btn">
            <span></span>
            질문 작성하기
          </a>
          <div className="qna_pop" id="q_pop">
            <div className="qna_header">
              질문 작성하기 <a href="#d">.</a>
            </div>
            <div className="qna_content">
              <div className="content_header">
                <span>질문</span>
                <span>{inputComment.length}자/200자</span>
              </div>
              <textarea
                value={inputComment}
                onChange={handleChange}
                maxLength="200"
                placeholder="질문을 남겨 주세요."
              ></textarea>
              <p>
                질문은 공개 상태로만 등록하실 수 있습니다.<i></i>
              </p>
              <div className="bot_btn">
                <a href="#d" className="cancel_btn">
                  취소
                </a>
                <a href="#d" className="submit_btn" onClick={handleInsert}>
                  확인
                </a>
              </div>
            </div>
          </div>
          <a href="#d" className="dim">
            .
          </a>
          <div className="comment_list"></div>
        </div>
        {userQnA}
        <div className="comment_page">
          <i
            onClick={() => handleMoveBtn(1)}
            className="move_btn move_first"
          ></i>
          <i
            onClick={() => {
              if (currentPage > 1) {
                handleMoveBtn(currentPage - 1);
              }
            }}
            className="move_btn move_one_left"
          ></i>
          <div>
            <PageMove
              currentPage={currentPage}
              postPerPage={postPerpage}
              totalPosts={comment.length}
              movePage={handlePage}
            />
          </div>
          <i
            onClick={() => {
              if (currentPage < Math.ceil(comment.length / postPerpage)) {
                handleMoveBtn(currentPage + 1);
              }
            }}
            className="move_btn move_right"
          ></i>
          <i
            onClick={() =>
              handleMoveBtn(
                Math.ceil(this.state.comment.length / this.state.postPerpage)
              )
            }
            className="move_btn move_end"
          ></i>
        </div>
      </>
    );
  }
}

export default QnAList;
