import React, { useState } from "react";
import "./Menu.css";
import Button from '@mui/material/Button';
import Badge from "@mui/material/Badge";

const Menu = ({ name, value, setTotal }) => {
  const [count, setCount] = useState(0);
  console.log(name);
  const countUp = () => {
    setCount((prevState) => prevState + 1);
    switch (name) {
      case "Coffee":
        setTotal(prevState => ({...prevState, count: prevState.count + 1, amount: prevState.amount + value }));
        break;

      case "Tea":
        setTotal(prevState => ({...prevState, count: prevState.count + 1, amount: prevState.amount + value }));
        break;

        case "Milk":
          setTotal(prevState => ({...prevState, count: prevState.count + 1, amount: prevState.amount + value }));
          break;

          case "Cola":
            setTotal(prevState => ({...prevState, count: prevState.count + 1, amount: prevState.amount + value }));
            break;

            case "Beer":
              setTotal(prevState => ({...prevState, count: prevState.count + 1, amount: prevState.amount + value }));
              break;
      default:
        break;
    }
  };
  return (
    <div className="menu-contents">
      <Badge badgeContent={count} color="primary">
        <Button variant="outlined" onClick={countUp}>{name} {value}円</Button>
      </Badge>
    </div>
  );
};

export default Menu;
