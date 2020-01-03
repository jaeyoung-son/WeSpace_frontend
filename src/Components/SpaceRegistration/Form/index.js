import React, { Component } from "react";
import SpaceRegistrationSubTitle from "../SpaceRegistrationSubTitle";
import "./RegistrationForm.scss";
import RegistrationInputText from "../InputTypeText";
import RegistrationInputSelect from "../InputTypeSelect";
import ImgUpload from "../ImgUpload";
import InputPost from "../InputPost";
import CheckListRow from "../CheckList";
import axios from "axios";

const data = [
  {
    name: "name",
    title: "공간명",
    info: { limitedWord: 18, type: "text", placeholder: null }
  },
  {
    name: "name2",
    title: "공간 한줄 소개",
    info: {
      limitedWord: 27,
      type: "text",
      placeholder: "공간을 소개하는 한줄 한문장을 입력해주세요"
    }
  },
  {
    name: "name3",
    title: "공간 소개",
    info: {
      limitedWord: 500,
      type: "textarea",
      placeholder: "공간을 상세하게 소개해보세요"
    }
  },
  {
    name: "name4",
    title: "가격",
    info: {
      limitedWord: 100,
      type: "number",
      placeholder: "공간을 상세하게 소개해보세요"
    }
  }
];
class RegistrationForm extends Component {
  state = {
    list: [],
    name: "12345",
    name2: "",
    name3: "",
    name4: "",
    open: 0,
    close: 0,
    host: 1,
    address: ""
  };
  handleValue = (name, value) => {
    this.setState({ [name]: value });
    console.log(this.state);
  };
  handleList = (id, name) => {
    const arr = this.state.list.concat(id);
    this.setState({ list: arr });
    console.log(this.state);
  };
  submit = () => {
    // const frm = new FormData();
    // frm.append("title", this.state.name);
    // frm.append("short_intro", this.state.name2);
    // frm.append("price", this.state.name4);
    // frm.append("long_intro", this.state.name3);
    // frm.append("location", this.state.address);
    // frm.append("host", this.state.host);
    // frm.append("open_time", this.state.open);
    // frm.append("close_time", this.state.close);
    // frm.append("min_time", "8");
    // frm.append("min_guest", "4");
    // axios
    //   .post("http://10.58.7.97:8000/registration", null, {
    //     params: {
    //       title: this.state.name
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    fetch("http://10.58.7.97:8000/space/registration", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        title: this.state.name,
        short_intro: this.state.name2,
        price: this.state.name4,
        long_intro: this.state.name3,
        location: this.state.address,
        host: this.state.host,
        open_time: this.state.open,
        close_time: this.state.close,
        min_time: "8",
        min_guest: "4"
      })
    });
  };
  render() {
    console.log(this.state);
    return (
      <form className="registration_form">
        <SpaceRegistrationSubTitle
          subtitle={"공간정보를 입력해주세요"}
          option={"필수입력"}
        />
        <CheckListRow handleList={this.handleList} list={this.state.list} />
        {data.map(currData => {
          return (
            <RegistrationInputText
              title={currData.title}
              isRequired={currData.isRequired}
              info={currData.info}
              name={currData.name}
              handleValue={this.handleValue}
            />
          );
        })}
        <RegistrationInputSelect handleValue={this.handleValue} />
        <ImgUpload />
        <InputPost handleValue={this.handleValue} />
        <div className="submit_wrap">
          <button className="submit" onClick={this.submit}>
            공간등록하기
          </button>
        </div>
      </form>
    );
  }
}

export default RegistrationForm;
