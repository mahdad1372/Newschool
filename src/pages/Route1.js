import React from 'react';

import {Switch , Route ,BrowserRouter } from 'react-router-dom';


const Route2 = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/adminpanel/student" component={()=>(<div className="text-dark"><a>student</a></div>)} />
      <Route path="/dabir" component={()=>(<div><a>dabir</a></div>)} />
      </BrowserRouter> 
      
    </div>
  );
}

export default Route2;
