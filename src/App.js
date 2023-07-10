import './App.css';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import Header from './Component/Header';
import Main from './Component/Main';
import Login from './Component/Login';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login />}/>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
