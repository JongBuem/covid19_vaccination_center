import React, { useEffect} from 'react';
const { kakao } = window;


export default function Map({lat, lng, zoom,arrLat,arrLng}){

let options =null;

    useEffect(() => {
        if(zoom===true){
            options = {
                center: new kakao.maps.LatLng(lng, lat ),
                level: 5,
            };
        }else if(zoom===false){
            options = {
                center: new kakao.maps.LatLng(lng, lat ),
                level: 10,
            };
        }
        
        const container = document.getElementById('map');
        const map = new kakao.maps.Map(container, options); // 맵생성

        for (let i = 0; i < arrLat.length; i++) {
        let markers =  new kakao.maps.LatLng(arrLng[i], arrLat[i] );
        let marker = new kakao.maps.Marker({ position : markers});
            marker.setMap(map);
        }
    }, [lng, lat]);

    return (
        <div id="map" className="map">
        </div>
    );
}