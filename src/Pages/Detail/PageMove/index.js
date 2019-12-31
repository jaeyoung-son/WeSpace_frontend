import React from "react";
import "../QnAList/QnAList.scss";

const PageMove = ({ postPerPage, totalPosts, movePage, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers.map(number => (
    <span
      className={number === { currentPage }.currentPage ? "currentSpan" : ""}
      onClick={() => movePage(number)}
      key={number}
    >
      {number}
    </span>
  ));
};

export default PageMove;
