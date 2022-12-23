import "./App.css";

import Order from "./components/Order";
import Menu from "./components/Menu";
import Detail from "./components/Detail";

import CoffeeIcon from "@mui/icons-material/Coffee";
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import React, { useState } from "react";

const App = () => {
  //　合計
  const [total, setTotal] = useState({ count: 0, amount: 0 });
  const [orderList, setOrderList] = useState([]);

  const items = [
    { name: "Coffee", value: 480, icon: <CoffeeIcon />},
    { name: "Tea", value: 280, icon: <EmojiFoodBeverageIcon /> },
    { name: "Milk", value: 180, icon: <LocalDrinkIcon /> },
    { name: "Cola", value: 190, icon: <FastfoodIcon /> },
    { name: "Beer", value: 580, icon: <SportsBarIcon /> },
  ];
  
  return (
    <React.Fragment>
      <div className="app">
        <div className="menu">
          <Menu
            name={items[0].name}
            value={items[0].value}
            icon={items[0].icon}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            name={items[1].name}
            value={items[1].value}
            icon={items[1].icon}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            name={items[2].name}
            value={items[2].value}
            icon={items[2].icon}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            name={items[3].name}
            value={items[3].value}
            icon={items[3].icon}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            name={items[4].name}
            value={items[4].value}
            icon={items[4].icon}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
        </div>

        <div className="details">
          <Detail orderList={orderList}
          items = {items} />
        </div>

        <div className="order">
          <Order total={total} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
