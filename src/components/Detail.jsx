// import React, { useState } from "react";
import "./Menu.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Detail = ({ name, value, count }) => {
  return (
    <TableRow
      key={name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell style={{ width: "25%" }} component="th" scope="row">
        {name}
      </TableCell>
      <TableCell style={{ width: "25%" }} align="right">
        {value}
      </TableCell>
      <TableCell style={{ width: "25%" }} align="right">
        {count}
      </TableCell>
      <TableCell style={{ width: "25%" }} align="right">
        {count * value}
      </TableCell>
    </TableRow>
  );
};

export default Detail;
