import React from "react";
import './component.css';

export default function Menu({id,sido,city,centerName,facilityName,zipCode,address,centerType}){

if(sido !== city.mode){
    sido=null;
    centerName=null;
    facilityName="";
    zipCode=null;
    address=null;
    centerType=null;
    return(
        <div>

        </div>
    );
}

if(sido === city.mode){
    return(
        <div className="center">
            <div className="center_info">
                <div className="centerName">
                    {centerName} 
                </div>
                <div className="facilityName">
                    [{facilityName}]
                </div>
            </div>
        </div>
    );
}

   
}