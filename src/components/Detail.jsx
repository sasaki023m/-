// import React, { useState } from "react";
import "./Menu.css";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Detail = ({ orderList }) => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ width: "25%" }}>商品</StyledTableCell>
            <StyledTableCell style={{ width: "25%" }} align="right">
              値段(円)
            </StyledTableCell>
            <StyledTableCell style={{ width: "25%" }} align="right">
              数(個)
            </StyledTableCell>
            <StyledTableCell style={{ width: "25%" }} align="right">
              金額(円)
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {orderList.map((items) => (
          <StyledTableRow
            key={items.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <StyledTableCell style={{ width: "25%" }} component="th" scope="row">
              {items.name}
            </StyledTableCell>
            <StyledTableCell style={{ width: "25%" }} align="right">
              {items.value}
            </StyledTableCell>
            <StyledTableCell style={{ width: "25%" }} align="right">
              {items.count}
            </StyledTableCell>
            <StyledTableCell style={{ width: "25%" }} align="right">
              {items.count * items.value}
            </StyledTableCell>
          </StyledTableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
  );
};

export default Detail;
