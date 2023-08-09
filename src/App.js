import { Reset } from './Common';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
import { productData } from './Component/ProductData';
import { useEffect, useState } from 'react';

//npm install react-router-dom@6으로 설치
// index.js에 <BrouserRouter>로 <App/> 감싸고
// index.js에 import { BrouserRouter } from 'react-router-dom'

function App() {
  const [data, setData] = useState(productData);
  return (
    <>
      <Reset/>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Main data={data}/>
          </>
        }></Route>
        {/* <Route path='/home' element={
          <>
            <div>홈</div>
          </>
        }></Route>
        <Route path='/about' element={
          <>
            <div>어바웃</div>
          </>
        }></Route>
        <Route path='/detail' element={
          <>
            <div>디테일</div>
          </>
        }></Route>
        <Route path='/404' element={
          <>
            <img src='https://picsum.photos/1920/600'/>
          </>
        }></Route> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
