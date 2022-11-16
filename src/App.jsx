import React from "react";

import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";
//  sranq ayn  componentenr nen  voronq irencic  nerkayacnum en arandzin ejer


import {Switch, Route, NavLink, Link, Redirect} from 'react-router-dom'
//  Reacti mijavayrum ejic  ej  gnalu  hnaravorutyunnern  integrelu hamar
//  Anhrajesht e  integrel  nor package` react-router-dom
//  ays  pahin  kirarum enq  hin versianeric mek@
//  install anelu hammar  kanchum enq hetevyal hramann
//  npm i react-router-dom@5.3.4
//  react routeri mej kan voroshaki  methodner voronq  tuyl en talis kazmakerpel Reacti mijavayrum routingi  gaxaparnern
//  Routing aselov  nkati unenq  ejic ej  gnal , borouseri mijavatum http  linki popoxutyunn

// React-router-domi hajord himnakan methodnern en
// Switch, Route, NavLink, Link, Redirect
// Switch - mi method e  vori mijavayrum  grum enq  mer  bolor ayn  componentnern  voronq  petq e  handisanan vorpes ejer
// Switch -i mijocov mer componentnern  voronq  irencic ejer en nerkayacnum, linki  kam (pathi ) popoxutyan  depqum,
// vortex vor  kanchel eqn  Switch method@  ayd tiruytum berum ev texadrum e linkin hamapatasxan  compoonent@

// Route - da mi method e  vori  mijocov  sahmanum enq  te  vor  pathi  depqum  vor  component  petqe  cuyc  ayntex vorte switch@ integrvac e
// Route  uni voroshaki parametrner
// path - vortex grvum e  tvyal  componenti  hamar naxatesvac  path@  vor@ lslelu  depqum  cuyc  kta  tvyal component@
// component - aystex  grum eqn ayn  comlonent@  vor@  petq e  ereva  hamapatasxan  path@ lselu  depqum

// stacvume  ayspes  Reacti mijavayrum vorpes ej arandznacnum enq voroshaki  componentner
// voronq dnum enq page  faylo mej ev  vorpes  component poxancum enq  route methodin

// ev  mer bolor  route methodnern  petq e  anpayman  kanchel Switch  methodi  nersum vorpiszi
// amen mi popoxutyun switch method@ hasqana  vor  componentn  petq e  cuyc ta kaxvac  linki popoxutyunic

// Redirect -  da mi  method e  vor@  uni "to" parametr aystex poxancum enq  link,  ira himnakan n patakn e, erb vor  mer  switcher@  chi karoxanum gtnel  te vor
// ej@  petq e  cuyc ta aysinq nte vor  route petq e hasaneli lini,  kam  chi gtnum hamapatasxan route, apa vorpes defaul  arjeq cucy
// e talis ayn ej@  vori  link@ poxancum eqn  to parametrin


//  NavLink, Link,  sranq ayn  methodnernen  voronc  mijocov  katarvum e ejeri  popoxutyunn
//  unen oarametr  to  vortex grvum e ayn  pathi kam linki anun vor@ irenic nerkayacnum e inch vor ej,  u petq e da  cuyc tal
//   NavLink, Link,  irenic nerkayacnum en a  teger  voronc  vra click aneluc,  mer  router  dom@ haskanu e vor  linki popoxutyu ne  exel  ev switcher@ pordzum e gtnel ayd  link@
// ete gtav  apa  cuyc  kta  hamapatasxan  ej@
//  NavLink@ Link ic  tarbervum e  mi parametrov ayn uni active  vichak  vor@  cuyc e talis te vor  ejn e hasaneli  kam  aktive,
//  da himnakanum ogtagorcum en  menuneri  hamar, vorpiszi haskananq te vor ejn e  ays  pahin aktive,
// ev  uni ays  parametr@ activeClassName  vori mijocov karoxanum enq popoxel NavLink-i hamar naxatesvac standart active  clasi  anunn ev  mer  hamapatasxan styler@ poxancel

function App() {
  return (<>
      <div className='P-admin'>
        <ul className='P-menu G-padding-33  '>
          <li>
            <NavLink activeClassName='P-active-header' to={'/home'}>home</NavLink>
          </li>
          <li>
            <NavLink activeClassName='P-active-header' to={'/about-us-vahe'}>about us</NavLink>
          </li>
          <li>
            <NavLink activeClassName='P-active-header' to={'/contact-us'}>contact us</NavLink>
          </li>
        </ul>

        <div className='P-text'>
          <Switch>

            <Route path={'/home'} component={Home}/>
            <Route path={'/about-us-vahe'} component={AboutUs}/>
            <Route path={'/contact-us'} component={ContactUs}/>

            <Redirect to={'/contact-us'}/>
          </Switch>
        </div>
      </div>

    </>
  );
}

export default App;
