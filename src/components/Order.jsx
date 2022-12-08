import React from 'react';
import "./Order.css";

const Order = ({total}) => {
  return (
    <div>
      <div className="order-title">
          <h1>お会計</h1>
      </div>
      <div className="order-contents">
          <h2>商品数：{total.count}</h2>
          <h2>合計金額：{total.amount}</h2>
      </div>
    </div>
  )
};
export default Order
