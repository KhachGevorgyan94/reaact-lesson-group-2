import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
//  Reacti mijavayrum ejic  ej  gnalu  hnaravorutyunnern  integrelu hamar
//  Anhrajesht e  integrel  nor package` react-router-dom
//  ays  pahin  kirarum enq  hin versianeric mek@
//  install anelu hammar  kanchum enq hetevyal hramann
//  npm i react-router-dom@5.3.4
//  react routeri mej kan voroshaki  methodner voronq  tuyl en talis kazmakerpel Reacti mijavayrum routingi  gaxaparnern
//  Routing aselov  nkati unenq  ejic ej  gnal , borouseri mijavatum http  linki popoxutyunn

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Araji hertin anhrajeshte  mer glxavor  projecti masum  integrel */}
    {/* BrowserRouter  component@  vor mijavayrum menq  kkaroxananq kirarel  routingi hamar naxatesvac  methodner */}
    {/* BrowserRouter  mijavayr e  vor@ gtnvum e misht lsoxi derum ev spasum e te inch  routing  (inch http  pat e popoxve)*/}
    {/* vori ardyunqum  dimume  ir mej gtnvox  funkcianerin  ev haskacnum e vor petq e popoxel  componentn */}
    {/* isk mer mot componentnern voronq stexcum enq  karox en handes gal  vorpes arandzin ejer*/}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
