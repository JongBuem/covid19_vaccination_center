
import Menu from "../component/Menu";
import '../App.css';

import React, { useState } from "react";

export default function Navigation({info,isLoading}){
    const datas = info;
    const [ state, setState ] = useState({ 
        mode:null, 
    }); //켈린더 와 매표의 초기모드


    return(
        <div className="navigation">
             <div onClick={()=>setState({ ...state, mode:"서울특별시"})}>서울</div>
             <div onClick={()=>setState({ ...state, mode:"인천광역시"})}>인천</div>
             <div onClick={()=>setState({ ...state, mode:"대전광역시"})}>대전</div>
             <div onClick={()=>setState({ ...state, mode:"대구광역시"})}>대구</div>
             <div onClick={()=>setState({ ...state, mode:"울산광역시"})}>울산</div>
             <div onClick={()=>setState({ ...state, mode:"부산광역시"})}>부산</div>
             <div onClick={()=>setState({ ...state, mode:"광주광역시"})}>광주</div>
             <div onClick={()=>setState({ ...state, mode:"경기도"})}>경기도</div>
             <div onClick={()=>setState({ ...state, mode:"강원도"})}>강원도</div>
             <div onClick={()=>setState({ ...state, mode:"충청북도"})}>충청북도</div>
             <div onClick={()=>setState({ ...state, mode:"충청남도"})}>충청남도</div>
             <div onClick={()=>setState({ ...state, mode:"경상북도"})}>경상북도</div>
             <div onClick={()=>setState({ ...state, mode:"경상남도"})}>경상남도</div>
             <div onClick={()=>setState({ ...state, mode:"전라북도"})}>전라북도</div>
             <div onClick={()=>setState({ ...state, mode:"전라남도"})}>전라남도</div>
             <div onClick={()=>setState({ ...state, mode:"제주특별자치도"})}>제주도</div>
            {isLoading ? 
                (<div><span>Loading...</span></div> ) : 
                (<div>
                    {datas.map(data=>(
                    <Menu 
                    key={data.id}
                    id={data.id} 
                    sido={data.sido }
                    city={state}
                    />)) }
                </div>)
            }
           
        </div>
    )
}

