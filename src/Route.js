import React from 'react';

import { Route ,BrowserRouter , Router, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Adminpanel2 from './pages/Admin-panel';

import './App.css';

const Route2 = () => {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Route exact path="/" component={()=>(<div><Main /></div>)} />
      <Route path="/adminpanel" component={()=>(<div><Adminpanel2/></div>)} />
      </BrowserRouter> 
      
    </div>
  );
}

export default Route2;
