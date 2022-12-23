import React from "react";
import "./Order.css";

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

const Order = ({ total }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >お会計</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
            <StyledTableCell ></StyledTableCell>
            <StyledTableCell ></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <StyledTableRow
            // key={items.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row"  >
              合計商品数：{total.count}個
            </StyledTableCell>

            <StyledTableCell >合計金額：{total.amount}円</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
            <StyledTableCell ></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>

    // <div>
    //   <Box component="span" sx={{ p: 2, border: "1px solid gray" }}>
    //     <div className="order-title">お会計</div>
    //     <div className="order-contents">
    //       商品数：{total.count}
    //       合計金額：{total.amount}
    //     </div>
    //   </Box>
    // </div>
  );
};
export default Order;
