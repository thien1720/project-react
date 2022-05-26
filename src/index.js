import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./component/Header/Header"
import Home from "./page/Home"
import LapTop from "./page/IteamLap"
import Tablet from "./page/IteamTablet"
import Phones from "./page/IteamPhone"
import Acess from "./page/IteamAcess"
import CardText from "./page/IteamText"
import ShowCard from "./page/ShowCard"
import Cart from './page/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <Provider store={store} >
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<ShowCard/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/lap" element={<LapTop/>} />
            <Route path="/tablet" element={<Tablet/>} />
            <Route path="/dienthoai" element={<Phones/>} />
            <Route path="/phukien" element={<Acess/>} />
            <Route path="/baiviet" element={<CardText/>} />

        </Routes>
      
      </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
