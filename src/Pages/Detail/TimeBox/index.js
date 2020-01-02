import React, { Component } from "react";
import fetchData from "../../../Utils/fetch";

class TimeBox extends Component {
  state = {
    num: [],
    timeState: {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
      7: true,
      8: true,
      9: true,
      10: true,
      11: true,
      12: true,
      13: true,
      14: true,
      15: true,
      16: true,
      17: true,
      18: true,
      19: true,
      20: true,
      21: true,
      22: true,
      23: true,
      24: true
    },
    click: []
  };

  handleToggle = number => {
    const copy = Object.assign({}, this.state.timeState);
    const Arr = [];
    copy[number] = !copy[number];
    this.setState(
      {
        timeState: copy
      },
      () => {
        for (let click in this.state.timeState) {
          if (this.state.timeState[click] === false) {
            Arr.push(click);
          }
        }
        this.setState(
          {
            click: Arr
          },
          () => {
            this.props.toRender(this.state.click);
          }
        );
      }
    );
  };

  componentDidMount() {
    fetchData("http://localhost:3000/Data/Data.json").then(res => {
      this.setState({
        num: res.TimeBox
      });
    });
  }

  render() {
    const { price } = this.props;
    const { handleToggle } = this;
    const { timeState } = this.state;
    const num = this.state.num;
    const boxes = num.map((el, index) => (
      <div
        key={index}
        className="time_box"
        onClick={() => {
          handleToggle(index + 1);
        }}
      >
        <div className="time_slice">{el}</div>
        <div className={timeState[index + 1] ? "time_price" : "clicked_box"}>
          {price}
        </div>
      </div>
    ));

    return <>{boxes}</>;
  }
}

export default TimeBox;
