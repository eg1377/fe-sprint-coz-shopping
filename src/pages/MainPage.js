import React from "react";
import Product from "../components/Product";
import "./style.css";
import Category from "../components/Category";
import Exhibition from "../components/Exhibition";
import Brand from "../components/Brand";

function MainPage() {
  return (
    <div className="List_main">
      <div className="first_List">
        <div className="Part1">
          <p className="Item_List">상품 리스트</p>
          <div className="Item_container">
            <ul className="Item_container_List">
              <Product />
              <Category />
              <Exhibition />
              <Brand />
            </ul>
          </div>
        </div>

        <div className="Part2">
          <p className="Item_List">북마크 리스트</p>
          <div className="Item_container">
            <ul className="Item_container_List">
              <Brand />
              <Category />
              <Product />
              <Exhibition />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
