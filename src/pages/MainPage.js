import React from "react";
import Product from "../components/Product";
import "./style.css";

function MainPage() {
  return (
    <div className="List_main">
      <div className="first_List">
        <div className="Part1">
          <p className="Item_List">상품 리스트</p>
          <div className="Item_container">
            <ul className="Item_container_List">
              <Product />
              <Product />
              <Product />
              <Product />
            </ul>
          </div>
        </div>
       
        <div className="Part2">
          <p className="Item_List">북마크 리스트</p>
          <div className="Item_container">
            <ul className="Item_container_List">
              <Product />
              <Product />
              <Product />
              <Product />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
