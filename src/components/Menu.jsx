import React from 'react';
import "./Menu.css";
const Menu = ({onAddCoffee}) => {
  return (
    <div className="app-menu">
        <div className="menu-contents">
        <button onClick={onAddCoffee}>コーヒー</button>
        <span className="coffeeNum"></span>
        </div>
        <div className="menu-contents">
        <button>紅茶</button>
        <span className="teeNum">0</span>
        </div>
        <div className="menu-contents">
        <button>ミルク</button>
        <span className="milkNum">0</span>
        </div>
        <div className="menu-contents">
        <button>コーラ</button>
        <span className="colaNum">0</span>
        </div>
        <div className="menu-contents">
        <button>ビール</button>
        <span className="beerNum">0</span>
        </div>
    </div>
  )
}

export default Menu
