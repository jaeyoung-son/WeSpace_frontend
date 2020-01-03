import React from "react";
import "./CheckList.scss";
import CheckListItem from "./CheckListItem";

class CheckListRow extends React.Component {
  state = {
    option: [
      { id: 1, name: "회의실", isTrue: true },
      { id: 2, name: "세미나실", isTrue: true },
      { id: 3, name: "다목적홀", isTrue: true },
      { id: 4, name: "작업실", isTrue: true },
      { id: 5, name: "레저시설", isTrue: true },
      { id: 6, name: "파티룸", isTrue: true },
      { id: 7, name: "공연장", isTrue: true },
      { id: 8, name: "연습실", isTrue: true },
      { id: 9, name: "카페", isTrue: true },
      { id: 10, name: "스터디룸", isTrue: true },
      { id: 11, name: "엠티장소", isTrue: true }
    ],
    count: 0
  };
  render() {
    return (
      <div className="check_list_wrap">
        <div className="input_item">
          <div className="input_title">공간 유형</div>
        </div>
        <ul className="check_list">
          {this.state.option.map(curr => {
            return (
              <CheckListItem
                key={curr.id}
                id={curr.id}
                value={curr}
                handleList={this.props.handleList}
                list={this.props.list}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CheckListRow;
