import React, { useEffect} from 'react';
import './component.css';
const { kakao } = window;



export default function Map({lat, lng, zoom, arrLat, arrLng, arrFacilityName}){

let options =null;

    useEffect(() => {

        //도시 선택과 센터선택에 따라 맵을 축소 or 확대
        if(zoom===true){
            options = {
                center: new kakao.maps.LatLng(lng, lat ), // 지도의 중심좌표
                level: 5,  // 지도의 확대 레벨
            };
        }else if(zoom===false){
            options = {
                center: new kakao.maps.LatLng(lng, lat ), // 지도의 중심좌표
                level: 10,  // 지도의 확대 레벨
            };
        }
        
        const container = document.getElementById('map'); //맵이 생성 되는 공간
        const map = new kakao.maps.Map(container, options); //맵생성

        //여러개의 마커의 위치와 인포드로우를 생성
        for (let i = 0; i < arrLat.length; i++) {
        let markers =  new kakao.maps.LatLng(arrLng[i], arrLat[i] ); //마커의 위치
        let marker = new kakao.maps.Marker({ position : markers}); //마커생성
            marker.setMap(map);//마커를 맴에 표시

        let infowindows = '<div class="customoverlay">' + arrFacilityName[i] + '</div>';//인포드로우 정의
        let infowindow = new kakao.maps.CustomOverlay({//커스텀한 인포드로우의 정보 
            position: markers,
            content: infowindows   
        });
        
        //마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다 
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
        }

        //커스텀한 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
        function makeOverListener(map, marker, infowindow) {
            return function() {
                infowindow.setMap(map);
            };
        }
        
        //커스텀한 인포윈도우를 닫는 클로저를 만드는 함수입니다 
        function makeOutListener(infowindow) {
            return function() {
                infowindow.setMap(null); 
            };
        }
        
    }, [lng, lat]);//위도와 경도가 바뀔때마다 동작

    return (
        <div id="map" className="map">
       
        </div>
    );
}