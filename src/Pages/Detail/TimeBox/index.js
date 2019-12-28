import React, { Component } from "react";
import fetchData from "../../../Utils/fetch";

class TimeBox extends Component {
  state = {
    num: []
  };
  componentDidMount() {
    fetchData("http://localhost:3000/Data/Data.json").then(res => {
      this.setState({
        num: res.TimeBox
      });
      console.log(this.state.num.TimeBox);
    });
  }

  render() {
    // if (this.state.num.num === "") return <></>;
    const { price } = this.props;
    const num = this.state;
    const boxes = num.num.map((el, index) => (
      <div key={index} className="time_box">
        <div className="time_slice">{el}</div>
        <div className="time_price">{price}</div>
      </div>
    ));

    return <>{boxes}</>;
  }
}

export default TimeBox;
