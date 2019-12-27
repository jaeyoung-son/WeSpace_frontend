import React, { Component } from "react";
import SignupInput from "../SignupInput";
import CheckList from "../CheckList";
import CheckListSelect from "../CheckListSelect";
import { checkMail, checkPw } from "../../../Utils/CheckValidation";
import "../CheckList/CheckList.scss";
import "./SignupForm.scss";
import { withRouter } from "react-router-dom";

class SignupForm extends Component {
  state = {
    nameInput: "",
    idInput: "",
    pwInput: "",
    rePwInput: "",
    boxMemory: true,
    boxMemoryOne: true,
    boxMemoryTwo: true,
    boxMemoryThree: true,
    boxMemoryFour: true
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  handleSubmit = e => {
    const {
      nameInput,
      pwInput,
      idInput,
      rePwInput,
      boxMemoryOne,
      boxMemoryTwo
    } = this.state;
    if (
      nameInput.length > 1 &&
      checkPw(pwInput) === true &&
      checkMail(idInput) === true &&
      rePwInput === pwInput &&
      boxMemoryOne === false &&
      boxMemoryTwo === false
    ) {
      e.preventDefault();
      fetch("http://10.58.7.97:8000/account", {
        method: "POST",
        body: JSON.stringify({
          nick_name: nameInput,
          email: idInput,
          password: pwInput
        })
      })
        .then(res => res.json())
        .then(res => {
          sessionStorage.setItem("Signup_token", res.access_token);
        });
      this.goToMain();
    } else {
      e.preventDefault();
    }
  };

  handleBoxState = () => {
    if (this.state.boxMemory === true) {
      this.setState({
        boxMemory: false,
        boxMemoryOne: false,
        boxMemoryTwo: false,
        boxMemoryThree: false,
        boxMemoryFour: false
      });
    } else if (this.state.boxMemory === false) {
      this.setState({
        boxMemory: true,
        boxMemoryOne: true,
        boxMemoryTwo: true,
        boxMemoryThree: true,
        boxMemoryFour: true
      });
    }
  };

  handleBoxFourState = e => {
    if (e.target.outerText === "이벤트 등 프로모션 알림 SMS 수신 (선택)") {
      this.setState({
        boxMemoryThree: !this.state.boxMemoryThree
      });
    } else if (
      e.target.outerText === "이벤트 등 프로모션 알림 메일 수신 (선택)"
    ) {
      this.setState({
        boxMemoryFour: !this.state.boxMemoryFour
      });
    } else if (e.target.outerHTML === `<a href="#a">확인</a>`) {
      this.setState({
        boxMemoryOne: !this.state.boxMemoryOne
      });
    } else if (e.target.outerHTML === `<a href="#b">확인</a>`) {
      this.setState({
        boxMemoryTwo: !this.state.boxMemoryTwo
      });
    }
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      [e.target.name]: value
    });
  };

  render() {
    const {
      idInput,
      pwInput,
      boxMemory,
      nameInput,
      rePwInput,
      boxMemoryOne,
      boxMemoryTwo,
      boxMemoryThree,
      boxMemoryFour
    } = this.state;
    const {
      handleChange,
      handleBoxState,
      handleSubmit,
      handleBoxFourState
    } = this;
    return (
      <>
        <form>
          <ul className="signup_ul">
            <li className={nameInput.length === 1 ? "signup_err" : ""}>
              <SignupInput
                handleChange={handleChange}
                name="nameInput"
                value={nameInput}
                type="text"
                placeholder="닉네임"
                message="닉네임은 두 글자 이상 입력해주세요."
              />
            </li>
            <li
              className={
                idInput.length > 0
                  ? checkMail(idInput)
                    ? ""
                    : "signup_err"
                  : ""
              }
            >
              <SignupInput
                handleChange={handleChange}
                name="idInput"
                value={idInput}
                type="text"
                placeholder="이메일"
                message="이메일 형식이 유효하지 않습니다."
              />
            </li>
            <li
              className={
                pwInput.length > 0 ? (checkPw(pwInput) ? "" : "signup_err") : ""
              }
            >
              <SignupInput
                handleChange={handleChange}
                name="pwInput"
                value={pwInput}
                type="password"
                placeholder="비밀번호"
                message="비밀번호가 너무 짧습니다."
              />
            </li>
            <li
              className={
                rePwInput.length > 0
                  ? rePwInput === pwInput
                    ? ""
                    : "signup_err"
                  : ""
              }
            >
              <SignupInput
                handleChange={handleChange}
                name="rePwInput"
                value={rePwInput}
                type="password"
                placeholder="비밀번호 확인"
                message="입력하신 비밀번호와 동일하게 입력해주세요."
              />
            </li>
          </ul>
          <div className="signup_check_box" onClick={handleBoxState}>
            <div className="all_agree">
              <button type="reset" className={boxMemory ? "" : "checked"} />
              <span>아래 약관에 모두 동의합니다.</span>
            </div>
          </div>
          <ul className="bot_ul">
            <CheckList
              btnClassName={boxMemoryOne ? "" : "checked"}
              liClassName="li_one"
              href="#pop1"
              message="서비스 이용약관 (필수)"
            />
            <CheckList
              btnClassName={boxMemoryTwo ? "" : "checked"}
              liClassName="li_two"
              href="#pop2"
              message="개인정보 처리 방침(필수)"
            />
            <CheckListSelect
              liClassName="li_three"
              btnClassName={boxMemoryThree ? "" : "checked"}
              handleClick={handleBoxFourState}
              message="이벤트 등 프로모션 알림 SMS 수신 (선택)"
            />
            <CheckListSelect
              liClassName="li_four"
              btnClassName={boxMemoryFour ? "" : "checked"}
              handleClick={handleBoxFourState}
              message="이벤트 등 프로모션 알림 메일 수신 (선택)"
            />
          </ul>
          <div>
            <button onClick={handleSubmit} className="submit" type="submit">
              회원가입
            </button>
          </div>
        </form>
        <div className="pop_container" id="pop1">
          <div className="popup_heading">이용약관</div>
          <div className="popup_content">
            <dt>제 1조 (목적)</dt>
            <dd>
              이 약관은 주식회사 앤스페이스("회사")가 제공하는 위스페이스
              <a href="https://www.spacecloud.kr">
                (https://www.wespace.kr)
              </a>{" "}
              온라인 서비스(이하 “서비스”라고 합니다.)의 이용과 관련하여 회사와
              회원과의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을
              목적으로 합니다.
            </dd>
            <dt>제 2조 (정의)</dt>
            <dd>
              이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1. "서비스"라
              함은 유휴 공간(이하 “공간”) 정보의 공유 및 예약을 위하여 “회사”가
              스페이스클라우드를 통해 제공하는 온라인 서비스를 말합니다. 2.
              “사이트”라 함은 “회사” 가 “서비스”를 운영하는 웹사이트를 의미하며,
              현재는 (https://wespace.kr) 입니다. 3. 회사의 "서비스"에 접속하여
              이 약관에 따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는
              "서비스"를 이용하는 고객은 서비스 이용목적에 따라 “게스트회원”과
              “호스트회원”으로 구분됩니다. A. 게스트회원: 이 약관에 따라
              “회사”와 이용계약을 체결하고 “회사”가 제공하는 “서비스”를 이용할
              수 있는 “회원”을 말합니다. 이하 이 약관에서 “회원”이라 함은
              “게스트회원”을 말합니다. B. 호스트회원: “스페이스클라우드 호스트
              이용약관”에 따라 “회사”와 이용계약을 체결하고 “회사”가 제공하는
              “서비스”를 통해 “공간” 및 컨텐츠를 등록하거나 제안할 수 있는
              회원을 말합니다. 4. "아이디"라 함은 "회원"의 식별과 "서비스"
              이용을 위하여 "회원"이 정한 온라인 아이디(이메일)를 말합니다. 5.
              "비밀번호"라 함은 "회원"이 부여 받은 "아이디”와 일치되는
              "회원"임을 확인하고 비밀을 보호하기 위해 "회원" 자신이 정한 온라인
              비밀번호를 말합니다. 6. "게시물"이라 함은 "회원"이 "서비스"를
              이용함에 있어 "서비스”에 게시한
              부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글, 사진,
              동영상 및 각종 파일과 링크 등을 말하며, "회원"이 “서비스”를 통해
              이용한 “공간”의 이용후기를 포함합니다. 7. “호스트센터”는
              “호스트”를 대상으로 제공하는 공간등록 및 관리 페이지를 말합니다.
            </dd>
            <dt>제 3 조 (약관의 게시와 개정)</dt>
            <dd>
              1. "회사"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록 “서비스”
              초기 화면에 게시합니다. 2. "회사"는 "약관의 규제에 관한 법률",
              "정보통신망 이용촉진 및 정보보호등에 관한 법률(이하
              "정보통신망법")" 등 관련 법령을 위배하지 않는 범위에서 이 약관을
              개정할 수 있습니다. 3. "회사"가 이 약관을 개정할 경우에는 적용일자
              및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그
              개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 다만
              “회원”에게 불리한 개정인 경우 30일 전부터 적용일자 전일까지 변경
              사항을 공지하며, 공지 외에도 “회원”이 등록한 전자우편, “서비스”
              로그인 시 동의창 등의 전자적 수단을 통해 따로 명확히 통지합니다.
              4. “회사”가 전항에 따라 개정약관을 공지 또는 통지하면서 “회원”에게
              개정약관의 공지기간 내에 거부의 의사표시를 하지 않으면 승낙의
              의사표시가 표명된 것으로 본다는 뜻을 명확하게 공지 또는
              통지하였음에도 “회원”이 명시적으로 거부의 의사표시를 하지 아니한
              경우 “회원”이 개정약관에 동의한 것으로 봅니다. 5. “회원”이
              개정약관의 적용에 동의하지 않는 경우 “회사”는 개정약관의 내용을
              적용할 수 없으며, 이 경우 “회원”은 이용계약을 해지할 수 있습니다.
              다만, 기존약관을 적용할 수 없는 특별한 사정이 있는 경우에는
              “회사”는 이용계약을 해지할 수 있습니다.
            </dd>
          </div>
          <div className="popup_button">
            <a onClick={handleBoxFourState} href="#a">
              확인
            </a>
          </div>
        </div>
        <div className="dim"></div>
        <div className="pop_container" id="pop2">
          <div className="popup_heading">개인정보처리방침</div>
          <div className="popup_content">
            <dd>
              주)위스페이스(이하 ‘회사’)는 정보통신망이용촉진 및 정보보호 등에
              관한 법률(이하 ‘정보통신망법’) 등에 따라 회원의 개인정보를
              보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록
              하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
            </dd>
            <dt>제1조 (개인정보 수집 항목 및 방법)</dt>
            <dd>
              1. 회사는 게스트 회원 가입 시 아래와 같은 개인정보를 수집하고
              있습니다. 1) 회원가입시 이 과정에서 성명, 이메일 주소,
              휴대폰번호(이상 필수적 수집 정보), 프로필사진, 연령대, 생년월일,
              성별(이상 선택적 수집정보)을 수집합니다. 2) 예약 및 결제 과정에서
              예약정보(성명, 이메일주소, 휴대폰번호)와 결제정보(신용카드 번호 및
              은행계좌정보 일부 등)를 수집합니다. 3) 호스트 회원의 경우,
              회원가입 직후 공간 정보 등록 과정에서 필수항목으로 대표자명,
              이메일 주소, 휴대폰번호, 주소 등의 공간정보와 선택항목으로
              유선전화번호, 계좌번호(은행명, 계좌번호, 예금주)를 수집합니다. 4)
              문의 접수 및 회신 과정에서 연락처 및 이메일 주소를 수집 할 수
              있으며, 이벤트 진행 시 배송정보 등을 수집할 수 있습니다. 5) 서비스
              이용 과정에서 IP주소, 쿠키, 방문 일시·불량 이용 기록,
              기기정보(PC/모바일) 정보가 자동으로 생성되어 수집합니다. 2. 회사는
              호스트 회원 가입 시 아래와 같은 개인정보를 수집하고 있습니다. 1)
              공간 정보 등록 과정에서 필수항목으로 대표자명, 주소 등의
              공간정보와 선택항목으로 유선전화번호, 계좌번호(은행명, 계좌번호,
              예금주)를 수집합니다. 2) 서비스 이용 과정에서 IP주소, 쿠키, 방문
              일시 ·불량 이용 기록, 기기정보(PC/모바일) 정보가 자동으로 생성되어
              수집합니다. 3) 문의 접수 및 회신 과정에서 연락처 및 이메일 주소를
              수집 할 수 있으며, 이벤트 진행 시 배송정보 등을 수집할 수
              있습니다. 3. 회사는 회원(게스트,호스트) 및 비회원이 서비스 내
              ‘전화걸기’ 버튼을 눌러, 전화를 할 경우, 전화 중개 위탁 서비스에
              따라, 전화번호를 수집합니다. 수집된 전화번호는 위탁사에 기록되며,
              회사에는 기록되지 않습니다. 4. 개인정보의 수집 방법 1)
              스페이스클라우드 스페이스클라우드 PC/모바일회원가입, 고객센터를
              통한 유선 상담, 이메일을 통한 온라인 상담, 네이버 톡톡을 통한
              온라인 상담 2) 오프라인에서 진행되는 이벤트, 세미나 등
            </dd>
            <dt>제2조(개인정보 이용 목적)</dt>
            <dd>
              회사는 다음의 목적으로 서비스 제공을 위한 최소한의 개인정보만을
              수집하며, 수집한 정보를 목적 외로 이용하거나, 회원의 동의 없이
              외부에 공개하지 않습니다. 1. 회원관리: 회원제 서비스 제공에 따른
              개인식별, 가입의사 확인, 이용약관 위반 회원에 대한 이용제한 조치,
              가입 및 가입횟수 제한, 서비스 부정 이용 제재, 고충 처리 및 분쟁
              조정을 위한 기록 보존, 고지사항 전달, 회원탈퇴 의사의 확인 2.
              콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적 분석,
              서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 회원간
              관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규
              서비스 요소의 발굴 및 기존 서비스 개선 등 3. 신규서비스 개발 및
              마케팅 광고에의 활용: 신규서비스 개발 및 맞춤 서비스 제공,
              인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성
              확인, 이벤트·광고성 정보 및 참여 기회 제공. 4. 결제 시스템 제공에
              따르는 본인인증, 예약 및 요금 결제, 상품 및 서비스 제공 5. 보안,
              프라이버시, 안전 측면에서 회원이 안심하고 이용할 수 있는 환경 구축
            </dd>
            <dt>제3조(개인정보의 제공)</dt>
            <dd>
              회사는 회원의 개인정보를 사전 동의 없이 외부에 공개하거나 동의하지
              않습니다. 다만, 회원이 사전에 제공에 동의한 경우, 법령의 규정에
              의하여 법원 및 수사기관의 요구가 있는 경우에는 예외로 합니다. 또한
              게스트 회원의 공간 예약 및 이용, 결제 및 환불처리 과정에서 아래와
              같이 개인정보가 호스트 회원에게 제공됩니다.
            </dd>
          </div>
          <div className="popup_button">
            <a onClick={handleBoxFourState} href="#b">
              확인
            </a>
          </div>
        </div>
        <div className="dim"></div>
      </>
    );
  }
}

export default withRouter(SignupForm);
