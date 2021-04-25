import React, { useEffect ,useState} from 'react';
const { kakao } = window;



export default function Map({lat, lng}){

    useEffect(() => {
        const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(lng, lat ),
			level: 5
		};
        const map = new kakao.maps.Map(container, options); // 맵생성
        const markerPosition  = new kakao.maps.LatLng(lng, lat); //마커좌표
        var marker = new kakao.maps.Marker({position: markerPosition});//마킹
        marker.setMap(map);// 마커를 생성합니다
       
    }, [lng]);

    return (
        <div id="map" className="map">
        </div>
    );
}