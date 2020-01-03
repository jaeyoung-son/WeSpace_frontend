import React, { Component } from "react";
import ReViewZoneArticle from "./ReViewZoneArticle";
import "./ReViewZone.scss";
import axios from "axios";
import { API_YERIN_URL } from "../../config";
class ReViewZone extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(`${API_YERIN_URL}/space/editor`)
      .then(res => {
        console.log(res);
        this.setState({ data: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.data);
    return (
      <>
        <div className="review_zone_wrap">
          <div className="main_sub_title">
            에디터ZONE
            <div className="zone_title_content">에디터의 추천을 만나보세요</div>
          </div>
          <div className="review_article_wrap">
            {this.state.data.map((curr, i) => {
              return <ReViewZoneArticle data={curr} key={i} id={i + 1} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ReViewZone;
