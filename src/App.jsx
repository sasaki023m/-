import "./App.css";

import Order from "./components/Order";
import Menu from "./components/Menu";
import Detail from "./components/Detail";

import CoffeeIcon from "@mui/icons-material/Coffee";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

import React, { useState } from "react";

const App = () => {
  //　合計
  const [total, setTotal] = useState({ count: 0, amount: 0 });
  const [orderList, setOrderList] = useState([]);

  const items = [
    { name: "Coffee", value: 480, icon: <CoffeeIcon color="action"/> },
    { name: "Tea", value: 280, icon: <EmojiFoodBeverageIcon color="action"/> },
    { name: "Milk", value: 180, icon: <LocalDrinkIcon color="action"/> },
    { name: "Cola", value: 190, icon: <FastfoodIcon color="action"/> },
    { name: "Beer", value: 580, icon: <SportsBarIcon color="action"/> },
  ];

  return (
    <React.Fragment>
      <div className="app">
        <div className="menu">
          <Menu
            {...items[0]}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            {...items[1]}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            {...items[2]}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            {...items[3]}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
          <Menu
            {...items[4]}
            setTotal={setTotal}
            orderList={orderList}
            setOrderList={setOrderList}
          />
        </div>

        <div className="order">
          <Order total={total} />
        </div>

        <div className="details">
          <Detail orderList={orderList} items={items} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
