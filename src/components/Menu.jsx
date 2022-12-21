import React, { useState } from "react";
import "./Menu.css";
import Box from '@mui/material/Box';
// import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
// import CoffeeIcon from "@mui/icons-material/Coffee";

const Menu = ({ name, value, setTotal }) => {
  let [count, setCount ] = useState(0);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
    switch (name) {
      case "Coffee":
        setTotal((prevState) => ({
          ...prevState,
          count: prevState.count + 1,
          amount: prevState.amount + value,
        }));
        break;

      case "Tea":
        setTotal((prevState) => ({
          ...prevState,
          count: prevState.count + 1,
          amount: prevState.amount + value,
        }));
        break;

      case "Milk":
        setTotal((prevState) => ({
          ...prevState,
          count: prevState.count + 1,
          amount: prevState.amount + value,
        }));
        break;

      case "Cola":
        setTotal((prevState) => ({
          ...prevState,
          count: prevState.count + 1,
          amount: prevState.amount + value,
        }));
        break;

      case "Beer":
        setTotal((prevState) => ({
          ...prevState,
          count: prevState.count + 1,
          amount: prevState.amount + value,
        }));
        break;
      default:
        break;
    }
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);

    if (count - 1 < 0) {
      count = 0;
      console.log(count);
      setTotal((prevState) => ({
        ...prevState,
        count: 0,
        amount: 0,
      }));

    } else {
      switch (name) {
        case "Coffee":
          setTotal((prevState) => ({
            ...prevState,
            count: prevState.count - 1,
            amount: prevState.amount - value,
          }));
          console.log(count);
          break;

        case "Tea":
          setTotal((prevState) => ({
            ...prevState,
            count: prevState.count - 1,
            amount: prevState.amount - value,
          }));
          break;

        case "Milk":
          setTotal((prevState) => ({
            ...prevState,
            count: prevState.count - 1,
            amount: prevState.amount - value,
          }));
          break;

        case "Cola":
          setTotal((prevState) => ({
            ...prevState,
            count: prevState.count - 1,
            amount: prevState.amount - value,
          }));
          break;

        case "Beer":
          setTotal((prevState) => ({
            ...prevState,
            count: prevState.count - 1,
            amount: prevState.amount - value,
          }));
          break;
        default:
          break;
      }
    }
    console.log(count);
  };

  return (
    <div className="menu-contents">
      <IconButton aria-label="remove" onClick={countDown}>
        <RemoveIcon />
      </IconButton>

      <Badge badgeContent={count} color="error">
        <Box component="span" sx={{ p: 2, border: '1px solid gray' }} >
          {name} {value}円
        </Box>
      </Badge>

      <IconButton aria-label="add" onClick={countUp}>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Menu;
