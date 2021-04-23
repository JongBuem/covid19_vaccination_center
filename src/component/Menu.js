import React from "react";
import './component.css';
import { Link } from "react-router-dom";

export default function Menu({id,sido,city,centerName,facilityName,zipCode,address,centerType, lat, lng}){

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
    console.log(lat, lng);
    lat=lat;
    lng=lng;
    return(
        <div className="center">
            <Link to={{ 
                pathname:"/",
                state:{
                    lat:lat,
                    lng:lng,
                }}} className="center_info"> 
              <div className="centerName">
                    {centerName} 
                </div>
                <div className="facilityName">
                    [{facilityName}]
                </div>
            </Link> 


        </div>
    );
}

   
}