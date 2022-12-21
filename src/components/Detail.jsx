// import React, { useState } from "react";
import "./Menu.css";
import TableCell from "@mui/material/TableCell";

// function createData(name, value, num, amount) {
//   return { name, value, num, amount };
// }

const Detail = ({ name, value, setTotal }) => {
  return (
    <TableCell component="th" scope="row">
      {name}
    </TableCell>
  );
};

export default Detail;
