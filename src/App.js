import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Box from './component/Box';

function App() {
  const count = useSelector(state => state.count)
  const id = useSelector(state => state.id)
  const password = useSelector(state => state.password)
  const dispatch = useDispatch()
  const increase = () => {
    // 사용할때 함수 안에 {} <- action / action을 사용할때는 type, payload라는 키가 있어야함 payload는 선택사항
    // dispatch는 action을 통해서 useDispatch를 던져준거다.
    dispatch({type: "INCREMENT", payload:{num:5}})
  }
  const decrement = () => {
    dispatch({type: "DECREMENT", payload:{num1:1}})
  }
  const login = () => {
    dispatch({type: 'LOGIN' , payload:{id: "roal3437", password: '123'}})
  }
  return (
    <div className="App">
      <p>{id}, {password}</p>
      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={login}>login</button>
      <Box/>
    </div>
  );
}

export default App;
