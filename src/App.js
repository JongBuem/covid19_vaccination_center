
import './App.css';
import React from "react";
import axios from "axios";
import Navigation from "./routes/Navigation";
import {HashRouter, Route} from "react-router-dom";
const KEY = "IvWsWLdmfiX2Gk3YCwkCMMEagPINpXdfgfhnec0s6HBid05ffim7vLRJZKl%2BrMVXqWa%2BRI20AwUDZ%2FXX5ABEvg%3D%3D"
const PAGE = 204;//최대 204개


export default class App extends React.Component{
  state  = {
    isLoading: true, //로딩중
    covid:null
  };

  getWeather = async()=>{ //axios가 url 영화정보를 받아올때 까지 실행
    const {data:{data}}= await axios.get(`https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=${PAGE}&GETcenters&serviceKey=${KEY}`); 
    this.setState({
      isLoading : false,
      covid:data,
    });
  }

  componentDidMount(){ 
    this.getWeather(); //현재위치를 가져오는 함수 호출
  }

  render(){
    const {covid, isLoading} = this.state; //this.state."" 를 간소화
    return (
      <HashRouter>
        <Route path="/"  render={() => <Navigation info={covid} isLoading={isLoading}/> }/>
      </HashRouter>
    );
  }
}



