import React from "react";
import '../App.css';

export default function Menu({id,sido,city}){

if(sido !== city.mode){
    sido=null;
}

    return(
        <div>
            {sido}
        </div>
    );
}