import React, { Component } from "react";
import fetchData from "../../../Utils/fetch";

class FacilityImg extends Component {
  state = {
    textData: []
  };

  componentDidMount() {
    fetchData("http://localhost:3000/Data/Data.json").then(data => {
      this.setState({
        textData: data.data
      });
    });
  }

  render() {
    const { textData } = this.state;
    const facilityList = textData.map((el, index) => (
      <li key={index}>
        <div className={el.class}></div>
        <p>{el.text1}</p>
        <p>{el.text2}</p>
      </li>
    ));
    return facilityList;
  }
}

export default FacilityImg;
