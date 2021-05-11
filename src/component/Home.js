import React, { useState }  from "react";
import './Home.css';
import Menu from "./Menu"

export default function Home({info,isLoading}){
    const datas = info; //코로나19 예방접종 센터 정보
    const [ state, setState ] = useState({ 
        mode:null, //areainfo의 area
        zom:false, //지역 클릭여부
    }); 

    //지역 에대한 정보
    const areainfo=[
        {area:"서울특별시",city:"서울"},
        {area:"인천광역시",city:"인천"},
        {area:"세종특별자치시",city:"세종"},
        {area:"대전광역시",city:"대전"},
        {area:"대구광역시",city:"대구"},
        {area:"울산광역시",city:"울산"},
        {area:"부산광역시",city:"부산"},
        {area:"광주광역시",city:"광주"},
        {area:"경기도",city:"경기도"},
        {area:"강원도",city:"강원도"},
        {area:"충청북도",city:"충청북도"},
        {area:"충청남도",city:"충청남도"},
        {area:"경상북도",city:"경상북도"},
        {area:"경상남도",city:"경상남도"},
        {area:"전라북도",city:"전라북도"},
        {area:"전라남도",city:"전라남도"},
        {area:"제주특별자치도",city:"제주도"},]

    let areaArray=[] //지역배열
    for(let i=0; i<areainfo.length; i++){
        areaArray[i] = <div key={i} onClick={()=>setState({ state, mode: areainfo[i].area})}>{areainfo[i].city}</div>
    }
    const Nav = areaArray.map(city=>{return city}); //지역배열을 모두 출력

    return(
        <div className="home">
            <div className="navigation">
                <div className="city">
                    {Nav}
                </div>
            </div>
            <div className="Location">
                <div>
                    {isLoading ? 
                        //로딩중이면 실행
                        (<div><span>Loading...</span></div> ) : 
                         //로딩이 끝나면 실행
                        (<div className="centers">
                            {datas.map(data=>(
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
                            />)) }
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}