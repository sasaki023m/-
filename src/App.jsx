import './App.css';
// import Button from '@mui/material/Button';
// import Badge from '@mui/material/Badge';
// import Card from '@mui/material/Card';
// import Typography from '@mui/material/Typography';

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
          {/* <Card variant="contained" color="secondary" sx={{ maxWidth: 300 }}>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              お会計
            </Typography>
            <Typography variant="body1" >
              合計: {total.count}個
            </Typography>
            <Typography variant="body1" >
              金額: {total.amount}円
            </Typography>
          </Card> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
