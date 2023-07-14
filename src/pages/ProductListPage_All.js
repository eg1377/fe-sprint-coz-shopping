import React from "react";
import "./style.css";
import FilterContainer from "../components/FilterContainer";
import ItemList from "../components/ItemList";
import Footer from "../components/footer";


function ProductListPage_All() {
  return (
    <div className="List_main_Product">
      
      <div className="Filter_container_box">
          <FilterContainer/>
      </div>

      <div className="List_Item_Product">
        <ItemList/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default ProductListPage_All;
