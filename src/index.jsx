import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/index.scss'
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * vorpiszi  mer  projectn hasaneli lini reduxi  hnaravorutyunnern
 * anhrajesht e  mer  projectin avelacnel  {provider}  componetn@  vor argumetnoc stanum e  mer  stexcac stor@
 * provider componenti  hashvin  mer  bolor stexcac redusernern  genercnelov  havaqvum e  mek amboxjakan  stati  mej
 * vornel hasaneli e darcnum ambox  producti  makardakov  bolor  componentnerum
 * vor@ nuynpes handisanum e karevor bajinneric mek@
 * **/
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
