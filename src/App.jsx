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
          <Menu
            name={items[0].name}
            value={items[0].value}
            setTotal={setTotal}
          />
          <Menu
            name={items[1].name}
            value={items[1].value}
            setTotal={setTotal}
          />
          <Menu
            name={items[2].name}
            value={items[2].value}
            setTotal={setTotal}
          />
          <Menu
            name={items[3].name}
            value={items[3].value}
            setTotal={setTotal}
          />
          <Menu
            name={items[4].name}
            value={items[4].value}
            setTotal={setTotal}
          />
        </div>

        <div className="details">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>商品</TableCell>
                  <TableCell>値段</TableCell>
                  <TableCell>数</TableCell>
                  <TableCell align="right">金額</TableCell>
                </TableRow>
              </TableHead>

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
