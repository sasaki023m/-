import "./App.css";

import Order from "./components/Order";
import Menu from "./components/Menu";
import Detail from "./components/Detail";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import React, { useState } from "react";

const App = () => {
  //　合計
  const [total, setTotal] = useState({ count: 0, amount: 0 });

  const items = [
    { name: "Coffee", value: 480 },
    { name: "Tea", value: 280 },
    { name: "Milk", value: 180 },
    { name: "Cola", value: 190 },
    { name: "Beer", value: 580 },
  ];

  // function createData(name, value, num, amount) {
  //   return { name, value, num, amount };
  // }

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

              <TableBody>
                {items.map((items) => (
                  <TableRow
                    key={items.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <Detail
                      name={items.name}
                      value={items.value}
                    />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="order">
          <Order total={total} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
