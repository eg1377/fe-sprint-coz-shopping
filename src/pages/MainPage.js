import React from "react";
import "./style.css";
import MainPage_itemList from "../components/MainPage_itemList";

function MainPage() {
  return (
    <div className="MainPage">
        <div className="List_Item">
          <MainPage_itemList />
        </div>
      </div>
  );
}

export default MainPage;
