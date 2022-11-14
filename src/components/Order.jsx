import React from 'react';
import "./Order.css";

const Order = () => {
  return (
    <div>
      <div className="order-title">
          <h1>お会計</h1>
      </div>
      <div className="order-contents">
          <h2>商品数：</h2>
          <h2>合計金額：</h2>
      </div>
    </div>
  )
};
export default Order
