import React, { Component } from "react";
import "./ImgUpload.scss";

class ImgUpload extends Component {
  state = {
    imgBase64: "", // 파일 base64
    imgFile: null // 이미지파일
  };
  handleChangeFile = event => {
    let reader = new FileReader(); //업로드하는 파일을 객체로 읽을수 있는 메서드
    reader.onloadend = e => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result; //reader.result는 이미지를 인코딩(base64 ->이미지를 text인코딩)한 결괏값이 나온다.
      if (base64) {
        this.setState({
          imgBase64: base64.toString() // 파일 base64 상태 업데이트
        });
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다. 저장후 onloadend 트리거
      this.setState({
        imgFile: event.target.files[0] // 파일 상태 업데이트 업로드 하는것은 파일이기 때문에 관리 필요
      });
    }
  };
  handleRemove = () => {
    this.setState({
      imgBase64: "",
      imgFile: null
    });
  };
  render() {
    return (
      <>
        <div className="input_item">
          <div className="input_title">대표이미지</div>
        </div>
        <div className="img_upload">
          <div className="img_preview" placeholder="이미지 파일을 추가해주세요">
            {this.state.imgBase64 ? (
              <img src={this.state.imgBase64} onClick={this.handleRemove}></img>
            ) : (
              <div></div>
            )}
          </div>
          <div className="img_add">
            <label for="ex_file" onChange={this.handleChangeFile}>
              파일첨부
            </label>
            <input
              type="file"
              name="imgFile"
              id="ex_file"
              className="ex_file"
              onChange={this.handleChangeFile}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ImgUpload;
