import './App.css';

import Order from './components/Order';
import Menu from './components/Menu';

import React, { useState } from 'react';

const App = () => {
  //　合計
  const [total,setTotal] = useState({count:0,amount:0});

  return (
    <React.Fragment>
      <div className="app">

        <div className="menu">
           <Menu name = "Coffee" value= {480} setTotal={setTotal}/>
           <Menu name = "Tea" value= {280} setTotal={setTotal}/>
           <Menu name = "Milk" value= {180} setTotal={setTotal}/>
           <Menu name = "Cola" value= {190} setTotal={setTotal}/>
           <Menu name = "Beer" value= {580} setTotal={setTotal}/>          
        </div>

        <div className="order">
          <Order total={total}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
