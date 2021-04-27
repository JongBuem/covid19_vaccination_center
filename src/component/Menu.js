import React, { useState, useEffect }  from "react";
import './component.css';
import Map from "./Map";


let arrLat=[100];
let arrLng=[100];
let arrFacilityName=[100];
export default function Menu({id,sido,city,centerName,facilityName,zipCode,address,centerType, lat, lng, zom}){
    const latt = lat;
    const lngg = lng;
    const facilityNamee =facilityName;
    const [ state, setState ] = useState({ 
        lat:latt,
        lng:lngg,
        mode:true,
        zoom:zom,
        facilityName:facilityNamee,
    }); 


    useEffect(() => {        
        arrLat=[];
        arrLng =[];
        arrFacilityName =[];
    }, [city.mode]);

    const toogle=()=>{
        if(state.mode===true){
            setState({...state, lat:lat-0.000001, lng:lng-0.000001,mode:false, zoom:true})
        }else{
        setState({...state, lat:lat, lng:lng,mode:true, zoom:true})
        }
     }


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


    if(sido === city.mode){
        arrLat.push(state.lat);
        arrLng.push(state.lng);
        arrFacilityName.push(state.facilityName);
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