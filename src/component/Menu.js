import React, { useState }  from "react";
import './component.css';
import Map from "./Map";


export default function Menu({id,sido,city,centerName,facilityName,zipCode,address,centerType, lat, lng}){
    const [ state, setState ] = useState({ 
        lat:127.344399,
        lng:36.378512,
        mode:false,
    }); 

    const Mode = state.mode;

    if(sido !== city.mode){
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

    function toogle(){
       if(state.mode===true){
        setState({...state, lat:lat-0.000001, lng:lng-0.000001,mode:false})
       }else{
        setState({...state, lat:lat, lng:lng,mode:true})
       }
    }

    if(sido === city.mode){
        const latt=lat;
        const lngg=lng;
        return(
            <div className="center" onClick={toogle}>
                <div className="center_info"> 
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
                    <Map lat={state.lat} lng={state.lng}></Map>
                </div>
            </div>
            
        );
    }

}