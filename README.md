# covid19_vaccination_center [코로나19 예방접종센터 조회]

홈페이지 : [https://JongBuem.github.io/covid19_vaccination_center](https://JongBuem.github.io/covid19_vaccination_center)

## **목차**

- [동작화면](#1-동작화면)
- [주요기능](#2-주요기능)
- [코드리뷰](#3-코드리뷰)
- [문제해결](#4-문제해결)
- [개선방안](#5-개선방안)
- [사용기술](#6-사용기술)

---

## **1. 동작화면**

## ![사본 -ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/75786010/116430106-7ad59f80-a881-11eb-8faa-af9027b18675.gif)

## **2. 주요기능**

- 공공데이터포털 API 이용
- 해당 지역의 예방접종센터 출력
- 카카오톡 Map API 이용
- 지도에 마커 생성
- 마커의 마우스 이벤트

---

## **3. 코드리뷰**

<br>

## 3-1. App.js

> **useEffect**를 이용하여 **마운트직후** 공공데이터포럴의 해당 **API정보를** 가져왔습니다. <br>**axios**로 코로나19 예방접종센터 정보를 가져온 후 state.covid에 갱신하였습니다.<br>Home컴포넌트에 코로나19 예방접종센터 정보를 가진 state.covid 와 로딩중을 표시하는 state.isLoading 값을 전달 하였습니다.

```js
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./component/Home";

export default function App() {
  const KEY =
    "IvWsWLdmfiX2Gk3YCwkCMMEagPINpXdfgfhnec0s6HBid05ffim7vLRJZKl%2BrMVXqWa%2BRI20AwUDZ%2FXX5ABEvg%3D%3D"; //공공데이터포럴 키
  const PAGE = 204; //가져올 최대 정보의 갯수
  const [state, setState] = useState({
    isLoading: true, //로딩중
    covid: null, //코로나19 예방접종 센터 정보
  });

  //화면에 컴포넌트가 마운트된 직후실행(componentDidMount 함수와 비슷)
  useEffect(() => {
    //async 함수의 실행을 일시 중지하고 코로나19 예방접종 센터 정보 API를 가져오길 기다린 다음 async 함수의 실행을 다시 시작하고 완료후 값을 반환
    (async () => {
      const {
        data: { data },
      } = await axios.get(
        `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=${PAGE}&GETcenters&serviceKey=${KEY}`
      );
      setState({ ...state, isLoading: false, covid: data }); //코로나19 예방접종 센터 정보를 state에 연결
    })();
  }, []);

  return (
    <div>
      <Home info={state.covid} isLoading={state.isLoading} />
    </div>
  );
}
```

<br>

## 3-2. Home.js

> Home 컴포넌트는 전달받은 정보의 수만큼 Map()을 이용하여 Menu컴포넌트를 불러오고 필요한 정보들을 전달 합니다.<br>지역정보를 담고있는 배열을 이용하여 네비게이션 메뉴를 출력합니다.<br>지역을 클릭하면 state.mode 값을 변경합니다.<br>state.mode는 Menu 컴포넌트에 전달하여 지역에 맞는 예방접종 센터 리스트를 비교 출력하기 위함 입니다.<br>state.zom은 지역과 센터 클릭여부에 따른 지도의 확대 값 level을 변경하기 위함 입니다.

```js
import React, { useState } from "react";
import "./Home.css";
import Menu from "./Menu";

export default function Home({ info, isLoading }) {
  const datas = info; //코로나19 예방접종 센터 정보
  const [state, setState] = useState({
    mode: null, //areainfo의 area
    zom: false, //지역 클릭여부
  });

  //지역 에대한 정보 배열
  const areainfo = [
    { area: "서울특별시", city: "서울" },
    { area: "인천광역시", city: "인천" },
    { area: "세종특별자치시", city: "세종" },
    { area: "대전광역시", city: "대전" },
    { area: "대구광역시", city: "대구" },
    { area: "울산광역시", city: "울산" },
    { area: "부산광역시", city: "부산" },
    { area: "광주광역시", city: "광주" },
    { area: "경기도", city: "경기도" },
    { area: "강원도", city: "강원도" },
    { area: "충청북도", city: "충청북도" },
    { area: "충청남도", city: "충청남도" },
    { area: "경상북도", city: "경상북도" },
    { area: "경상남도", city: "경상남도" },
    { area: "전라북도", city: "전라북도" },
    { area: "전라남도", city: "전라남도" },
    { area: "제주특별자치도", city: "제주도" },
  ];

  let areaArray = []; //지역배열
  for (let i = 0; i < areainfo.length; i++) {
    areaArray[i] = (
      <div key={i} onClick={() => setState({ state, mode: areainfo[i].area })}>
        {areainfo[i].city}
      </div>
    );
  }
  const Nav = areaArray.map((city) => {
    return city;
  }); //지역배열을 모두 출력

  return (
    <div className="home">
      <div className="navigation">
        <div className="city">{Nav}</div>
      </div>
      <div className="Location">
        <div>
          {isLoading ? (
            //로딩중이면 실행
            <div>
              <span>Loading...</span>
            </div>
          ) : (
            //로딩이 끝나면 실행
            <div className="centers">
              {datas.map((data) => (
                <Menu
                  key={data.id}
                  id={data.id}
                  sido={data.sido}
                  city={state.mode}
                  centerName={data.centerName}
                  facilityName={data.facilityName}
                  zipCode={data.zipCode}
                  address={data.address}
                  centerType={data.centerType}
                  lat={data.lat}
                  lng={data.lng}
                  zom={state.zom}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

<br>

## 3-3. Menu.js

> Menu컴포넌트는 Home으로부터 클릭하여 받아온 지역정보와 전체 지역정보를 비교하여 해당하는 지역의 예방접종센터정보를 리스트로 출력하고 해당하지 않는 지역의 정보는 출력하지 않습니다.<br>지도에 여러개의 마커와 센터의 시설명을 표시할 정보를 담은 위도,경도 배열과 센터명 배열을 Map컴포넌트에 전달합니다.<br>state.zoom은 Home컴포넌트의 zom을 초기값으로 하고 센터 리스트와 네비게이션의 지역에 대한 클릭여부를 판단하여 변경하고 Map컴포넌트에 전달 합니다.

```js
import React, { useState, useEffect } from "react";
import "./component.css";
import Map from "./Map";

let arrLat = [100]; //위도배열
let arrLng = [100]; //경도배열
let arrFacilityName = [100]; //센터의 시설명 배열

export default function Menu({
  id,
  sido,
  city,
  centerName,
  facilityName,
  zipCode,
  address,
  centerType,
  lat,
  lng,
  zom,
}) {
  const latt = lat; //위도
  const lngg = lng; //경도
  const facilityNamee = facilityName; //센터의 시설명
  const [state, setState] = useState({
    lat: latt, //위도
    lng: lngg, //경도
    facilityName: facilityNamee, //센터의 시설명
    mode: true, //센터 클릭여부
    zoom: zom, //지역 클릭여부
  });

  //화면에 컴포넌트가 마운트된 직후실행
  useEffect(() => {
    arrLat = []; //배열을 비움
    arrLng = []; //배열을 비움
    arrFacilityName = []; //배열을 비움
  }, [city]); //네비게이션에서 도시를 선택할때마다 실행됨

  //동일한 센터를 다시 클릭 하였을때 함수(토글)
  //미세한 위치변경, 센터 클릭여부 변경,
  const toogle = () => {
    if (state.mode === true) {
      //동일한 센터를 다시 클릭하면
      setState({
        ...state,
        lat: lat - 0.000001,
        lng: lng - 0.000001,
        mode: false,
        zoom: true,
      }); //위치를 미세하게 변경하고 클릭여부를 변경과 지역클릭여부 변경
    } else {
      setState({ ...state, lat: lat, lng: lng, mode: true, zoom: true }); //위치를 미세하게 변경하고 클릭여부를 변경과 지역클릭여부 변경
    }
  };

  //예방접종 센터 지역과, 네비게이션에서 선택한 지역과 다르면
  //전부 비운다
  if (sido !== city) {
    sido = null;
    centerName = null;
    facilityName = "";
    address = null;
    centerType = null;
    lat = null;
    lng = null;
    return <div></div>;
  }

  //예방접종 센터 지역과, 네비게이션에서 선택한 지경이 같으면
  //선택한 지역의 센터 목록과 지도를 표시
  if (sido === city) {
    arrLat.push(state.lat); //배열에 위도를 추가
    arrLng.push(state.lng); //배열에 경도를 추가
    arrFacilityName.push(state.facilityName); //배열에 센터의 시설명을 추가
    return (
      <div className="center">
        <div className="center_info" onClick={toogle}>
          <div>
            <div className="centerName">{centerName}</div>
            <div className="facilityName">[{facilityName}]</div>
          </div>
        </div>
        <div>
          <Map
            lat={state.lat}
            lng={state.lng}
            zoom={state.zoom}
            arrLat={arrLat}
            arrLng={arrLng}
            arrFacilityName={arrFacilityName}
          ></Map>
        </div>
      </div>
    );
  }
}
```

<br>

## 3-4. Map.js

> Map컴포넌트는 카카오톡 map API를 이용하여 화면에 지도를 출력합니다.<br>화면에 출력할 지도의 옵션은 Menu컴포넌트에서 전달받은 zoom값의 따라 변경 됩니다. (zoom: 네비게이션과 리스트의 클릭여부)<br>전달받은 lat(위도)와 lng(경도)의 값을 이용하여 지도가 출력될 중심을 설정 하였습니다.<br>arrLat(위도), arrLng(경도), arrFacilityName(센터명) 배열을 이용하여 지도에 표시할 marker와 marker의 infowindow(정보)를 생성 하였습니다.<br>addListener를 이용하여 mouse의 event의 따라 함수를 호출하여 infowindow(정보)가 출력되거나 닫히게 하였습니다.

```js
import React, { useEffect } from "react";
import "./component.css";
const { kakao } = window;

export default function Map({
  lat,
  lng,
  zoom,
  arrLat,
  arrLng,
  arrFacilityName,
}) {
  let options = null; //지도에 대한 옵션

  //지역 클릭여부에 따라 지도를 축소 or 확대
  if (zoom === false) {
    options = {
      center: new kakao.maps.LatLng(lng, lat), // 지도의 중심좌표
      level: 10, // 지도의 확대 레벨
    };
  } else if (zoom === true) {
    options = {
      center: new kakao.maps.LatLng(lng, lat), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };
  }

  useEffect(() => {
    const container = document.getElementById("map"); //지도가 생성 되는 공간
    const map = new kakao.maps.Map(container, options); //지도 생성

    //여러개의 마커의 위치와 인포드로우(마커의 정보)를 생성
    //위도배열의 길이 만큼 반복
    for (let i = 0; i < arrLat.length; i++) {
      let markers = new kakao.maps.LatLng(arrLng[i], arrLat[i]); //마커의 위치
      let marker = new kakao.maps.Marker({ position: markers }); //마커에 대한 정보
      marker.setMap(map); //마커를 지도에 표시

      let infowindows =
        '<div class="customoverlay">' + arrFacilityName[i] + "</div>"; //인포드로우 정의
      let infowindow = new kakao.maps.CustomOverlay({
        position: markers,
        content: infowindows,
      }); //커스텀한 인포드로우에 대한 정보

      //마커에 mouseover, mouseout, click 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "click",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(map, "click", makeOutListener(infowindow));
    }

    //커스텀한 인포윈도우를 표시하는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.setMap(map);
      };
    }

    //커스텀한 인포윈도우를 닫는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.setMap(null);
      };
    }
  }, [lng]); //위치의 값이 바뀔때마다 동작

  return <div id="map" className="map"></div>;
}
```

---

## **4. 문제해결**

- 현재 코로나19 예방접종센터의 위치와 정보를 가져오고 싶었습니다.<br>그래서 공공데이터포털에서 제공하는 API를 axios.get을 이용하여 정보를 가지고 올 수 있었습니다.

<br>

- class방식의 컴포넌트를 전부 function방식으로 바꾸어서 사용하고 싶었지만, state사용과 변경 그리고 컴포넌트 life cycle을 사용하는데 어려움이 있었습니다.<br>https://ko.reactjs.org/docs/hooks-effect.html 의 공식 문서를 참고하여 useState, useEffect 방식을 이용하여 class컴포넌트 에서 function형 으로 변경 할 수 있었습니다.

<br>

- 처음으로 카카오톡 Map API를 사용해 보기위해서 카카오톡 개발자 홈페이지를 참고 하였지만, React방식이 아닌 JavaScript방식으로 작성되어 있어서 한참을 해맸습니다.<br>
  그래서 JavaScript방식의 코드를 하나씩 해석하면서 코드를 이해하니까 어떻게 작성할지 길이 보이기 시작하면서 React에 적용 할 수 있었습니다.

<br>

---

## **5. 개선방안**

- 모바일(ios,android) 반응형 개선
- marker 이미지 커스텀
- marker 클릭 이벤트 추가

---

## **6. 사용기술**

<img width="150px" height="150px" src="https://user-images.githubusercontent.com/75786010/113030512-a4d76b80-91c8-11eb-96c7-0c6dd787b9aa.JPG"></img>
<img width="150px" height="150px" src="https://user-images.githubusercontent.com/75786010/104137565-20532900-53e1-11eb-8f6e-d39efeaf9285.JPG"></img>
<img width="150px" height="150px" src="https://user-images.githubusercontent.com/75786010/116450850-c0e92e00-a896-11eb-9a76-cb8326bad8da.JPG"></img>
<img width="150px" height="150px" src="https://user-images.githubusercontent.com/75786010/113031495-c2590500-91c9-11eb-9b5a-9a1f667fe966.JPG"></img>
<img width="150px" height="150px" src="https://user-images.githubusercontent.com/75786010/116450843-bfb80100-a896-11eb-8453-797fd1129572.JPG"></img>

---

### 실행환경

- [ ] Internet Explorer :poop:
- [x] Chrome :thumbsup:
- [x] Edge :thumbsup:
