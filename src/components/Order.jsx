import React from "react";
import "./Order.css";

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
