import React, { useState } from "react";
import "./Menu.css";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";

const Menu = React.memo(
  ({ name, value, icon, setTotal, orderList, setOrderList }) => {
    const [count, setCount] = useState(0);
    console.log(name, count);
    const countUp = () => {
      setCount((prevState) => prevState + 1);
      setTotal((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
        amount: prevState.amount + value,
      }));
      const newOrderList = [...orderList];
      // check name exist
      if (newOrderList.filter((item) => item.name === name).length) {
        newOrderList.forEach((item) => {
          if (item.name === name) item.count = count + 1;
        });
      } else {
        const newOrder = {
          name: name,
          value: value,
          count: count + 1,
        };
        newOrderList.push(newOrder);
      }
      console.log("orderList", orderList);
      setOrderList(newOrderList);
    };

    const countDown = () => {
      setCount((prevState) => prevState - 1);
      setTotal((prevState) => ({
        ...prevState,
        count: prevState.count - 1,
        amount: prevState.amount - value,
      }));
      const newOrderList = [...orderList];
      // check name exist
      if (newOrderList.filter((item) => item.name === name).length) {
        newOrderList.forEach((item) => {
          if (item.name === name) item.count = count - 1;
        });
      }
      console.log("orderList", orderList);
      setOrderList(newOrderList.filter(item => item.count > 0));
    };

    return (
      <div className="menu-contents">
        <IconButton
          aria-label="remove"
          disabled={count <= 0}
          onClick={countDown}
        >
          <RemoveIcon />
        </IconButton>

        <Badge badgeContent={count} color="warning">
          <Box component="span" sx={{ p: 2, border: "1px solid #e65100", borderRadius: '5%'}}>
          {icon} {name} {value}円
          </Box>
        </Badge>

        <IconButton aria-label="add" onClick={countUp}>
          <AddIcon />
        </IconButton>
      </div>
    );
  }
);

export default Menu;
