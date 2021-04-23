import React, { useEffect } from 'react';
const { kakao } = window;


export default function Map(){
   

    useEffect(() => {
        const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(36.378512, 127.344399 ),
			level: 3
		};
        const map = new kakao.maps.Map(container, options); // 맵생성
        const markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); //마커좌표
        var marker = new kakao.maps.Marker({position: markerPosition});//마킹
        marker.setMap(map);// 마커를 생성합니다

    }, []);

    return (
        <div id="map">
        </div>
    );
}

