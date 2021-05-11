import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Home from "./component/Home";

export default function App(){
  const KEY = "IvWsWLdmfiX2Gk3YCwkCMMEagPINpXdfgfhnec0s6HBid05ffim7vLRJZKl%2BrMVXqWa%2BRI20AwUDZ%2FXX5ABEvg%3D%3D"//공공데이터포럴 키
  const PAGE = 204;//가져올 최대 정보의 갯수
  const [ state, setState ] = useState({ 
    isLoading: true, //로딩중
    covid:null //코로나19 예방접종 센터 정보
  }); 

  //화면에 컴포넌트가 마운트된 직후실행(componentDidMount 함수와 비슷)
  useEffect(() => {
    (async()=>{ //async 함수의 실행을 일시 중지하고 코로나19 예방접종 센터 정보 API를 가져오길 기다린 다음 async 함수의 실행을 다시 시작하고 완료후 값을 반환
      const {data:{data}}= await axios.get(`https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=${PAGE}&GETcenters&serviceKey=${KEY}`); 
      setState({...state,   isLoading : false, covid:data }); //코로나19 예방접종 센터 정보를 state에 연결
    })();
  },[]);

  return (
    <div>
      <Home info={state.covid} isLoading={state.isLoading}/>
    </div>
  );
}
