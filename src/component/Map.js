import React, { useEffect} from 'react';
import './component.css';
const { kakao } = window;

export default function Map({lat, lng, zoom, arrLat, arrLng, arrFacilityName}){
    let options =null; //지도에 대한 옵션
    
    //지역 클릭여부에 따라 지도를 축소 or 확대
    if(zoom===false){
        options = {
            center: new kakao.maps.LatLng(lat, lng ), // 지도의 중심좌표
            level: 10,  // 지도의 확대 레벨
        }
    }else if(zoom===true){
        options = {
            center: new kakao.maps.LatLng(lat, lng ), // 지도의 중심좌표
            level: 5,  // 지도의 확대 레벨
        }
    }

    useEffect(() => {
        const container = document.getElementById('map'); //지도가 생성 되는 공간
        const map = new kakao.maps.Map(container, options); //지도 생성

        //여러개의 마커의 위치와 인포드로우(마커의 정보)를 생성
        //위도배열의 길이 만큼 반복
        for (let i = 0; i < arrLat.length; i++) {
        let markers =  new kakao.maps.LatLng(arrLat[i], arrLng[i]); //마커의 위치
        let marker = new kakao.maps.Marker({ position : markers}); //마커에 대한 정보
            marker.setMap(map);//마커를 지도에 표시

        let infowindows = '<div class="customoverlay">' + arrFacilityName[i] + '</div>'; //인포드로우 정의
        let infowindow = new kakao.maps.CustomOverlay({ position: markers, content: infowindows }); //커스텀한 인포드로우에 대한 정보 
        
        //마커에 mouseover, mouseout, click 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(map, 'click', makeOutListener(infowindow));
        }
        
        //커스텀한 인포윈도우를 표시하는 함수입니다 
        function makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.setMap(map);
            };
        }
        
        //커스텀한 인포윈도우를 닫는 함수입니다 
        function makeOutListener(infowindow) {
            return function() {
                infowindow.setMap(null); 
            };
        }
    }, [lng]);//위치의 값이 바뀔때마다 동작

    return (
        <div id="map" className="map">
        </div>
    );
}