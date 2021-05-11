import React, { useState, useEffect }  from "react";
import './component.css';
import Map from "./Map";

let arrLat=[100]; //위도배열
let arrLng=[100]; //경도배열
let arrFacilityName=[100]; //센터의 시설명 배열

export default function Menu({id, sido, city, centerName, facilityName, zipCode, address, centerType, lat, lng, zom}){
    const latt = lat; //위도
    const lngg = lng; //경도
    const facilityNamee =facilityName; //센터의 시설명
    const [ state, setState ] = useState({ 
        lat:latt, //위도
        lng:lngg, //경도
        facilityName:facilityNamee, //센터의 시설명
        mode:true, //센터 클릭여부
        zoom:zom, //지역 클릭여부
    }); 

    //화면에 컴포넌트가 마운트된 직후실행
    useEffect(() => {        
        arrLat=[]; //배열을 비움
        arrLng =[]; //배열을 비움
        arrFacilityName =[]; //배열을 비움
    }, [city]); //네비게이션에서 도시를 선택할때마다 실행됨 

    //동일한 센터를 다시 클릭 하였을때 함수(토글)
    //미세한 위치변경, 센터 클릭여부 변경, 
    const toogle=()=>{
        if(state.mode===true){ //동일한 센터를 다시 클릭하면
            setState({...state, lat:lat-0.000001, lng:lng-0.000001, mode:false, zoom:true}) //위치를 미세하게 변경하고 클릭여부를 변경과 지역클릭여부 변경
        }else{
            setState({...state, lat:lat, lng:lng, mode:true, zoom:true}) //위치를 미세하게 변경하고 클릭여부를 변경과 지역클릭여부 변경
        }
    }

    //예방접종 센터 지역과, 네비게이션에서 선택한 지역과 다르면 
    //전부 비운다
    if(sido !== city){
        sido=null;
        centerName=null;
        facilityName="";
        address=null;
        centerType=null;
        lat=null;
        lng=null;
        return(
            <div>
            </div>
        );
    }

    //예방접종 센터 지역과, 네비게이션에서 선택한 지경이 같으면
    //선택한 지역의 센터 목록과 지도를 표시
    if(sido === city){
        arrLat.push(state.lat); //배열에 위도를 추가
        arrLng.push(state.lng); //배열에 경도를 추가
        arrFacilityName.push(state.facilityName); //배열에 센터의 시설명을 추가
        return(
            <div className="center">
                <div className="center_info" onClick={toogle}> 
                    <div>
                        <div className="centerName">
                                {centerName} 
                            </div>
                            <div className="facilityName">
                                [{facilityName}]
                            </div>
                        </div> 
                    </div>
                <div>
                    <Map lat={state.lat} lng={state.lng} zoom={state.zoom} arrLat={arrLat} arrLng={arrLng} arrFacilityName={arrFacilityName}></Map>
                </div>
            </div>
            
        );
    }
}