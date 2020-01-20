import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainList.scss";
import axios from "axios";
import { API_YERIN_URL } from "../../config";

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  componentDidMount() {
    axios
      .get(`${API_YERIN_URL}/space`)
      .then(res => {
        this.setState({ list: res.data.Categority });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <section className="main_list_wrap background_gray">
        <div className="main_sub_title">유형으로 검색하기</div>
        <ul className="list_content">
          {this.state.list.map((currList, i) => {
            return (
              <Link to="/" key={currList.id}>
                <li className="list_content_item">{currList.category}</li>
              </Link>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default MainList;
