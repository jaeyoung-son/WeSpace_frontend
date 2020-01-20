/*global kakao*/
import React, { Component } from "react";
import "./KaKaoMap.scss";

class KaKaoMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      map: null,
      xlocation: 0,
      ylocation: 0
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4739d49844352d17f62f36925fe6908b&autoload=false&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const option = {
          center: new kakao.maps.LatLng(0, 0),
          level: 4
        };
        const el = this.mapRef;

        //지도생성
        const map = new kakao.maps.Map(el, option);
        //geocoder라이브러리
        const geocoder = new kakao.maps.services.Geocoder();

        //좌표변환 함수
        const handleAddress = (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            //마커이미지
            const imageSrc = "https://www.spacecloud.kr/_nuxt/img/cace91f.png", // 마커이미지의 주소
              imageSize = new kakao.maps.Size(36, 47), // 마커이미지의 크기
              imageOption = { offset: new kakao.maps.Point(27, 69) };
            const markerImage = new kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imageOption
            );
            console.log(coords);
            //마커를 생성
            const marker = new kakao.maps.Marker({
              position: coords,
              image: markerImage
            });
            //마커가 지도 위에 표시되도록 설정
            marker.setMap(map);
            //최초 잠금설정
            map.setZoomable(this.state.clicked);
            //현재 지도 스테이트에서 관리
            this.setState({
              map
            });
            //중심값 변경
            map.setCenter(coords);
          }
        };
        //geocoder 라이브러리 addressSearch 메서드 사용
        geocoder.addressSearch(this.props.address, handleAddress);
      });
    };
  }

  //잠금
  handleClick = () => {
    this.setState(
      {
        clicked: !this.state.clicked
      }, //setstate는 비동기라서 두번째 콜백함수에서 줌인 아웃 처리
      () => {
        this.state.map.setZoomable(this.state.clicked);
      }
    );
  };

  //줌인 줌아웃
  zoomIn = () => {
    this.setState({
      clicked: true
    });
    this.state.map.setLevel(this.state.map.getLevel() - 1);
  };

  zoomOut = () => {
    this.setState({
      clicked: true
    });
    this.state.map.setLevel(this.state.map.getLevel() + 1);
  };

  render() {
    const mapWidth = {
      width: this.props.width,
      height: this.props.height
    };
    return (
      <div className="map_wrap" style={mapWidth}>
        <div className="map" id="map" ref={ref => (this.mapRef = ref)}></div>
        <div className="custom_zoomcontrol radius_border">
          <span
            className={
              this.state.clicked
                ? "custom_zoomcontrol_lock"
                : "custom_zoomcontrol_unlock"
            }
            onClick={this.handleClick}
          ></span>
          <span className="custom_zoomcontrol_in" onClick={this.zoomIn}></span>
          <span
            className="custom_zoomcontrol_out"
            onClick={this.zoomOut}
          ></span>
        </div>
      </div>
    );
  }
}

export default KaKaoMap;
