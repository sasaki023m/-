import React from "react";
import "./Order.css";

// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import Box from "@mui/material/Box";

const Order = ({ total }) => {
  return (
    <div>
      <Box component="span" sx={{ p: 2, border: "1px solid gray" }}>
        <div className="order-title">お会計</div>
        <div className="order-contents">
          商品数：{total.count}
          合計金額：{total.amount}
        </div>
      </Box>
    </div>
  );
};
export default Order;
