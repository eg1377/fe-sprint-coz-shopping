import Product from "../components/Product";
import Category from "../components/Category";
import Exhibition from "../components/Exhibition";
import Brand from "../components/Brand";


function ItemList(){
  return(
    <div className="Item_container_Product">
    <ul className="Item_container_List_Product">
      <Brand />
      <Category />
      <Product />
      <Exhibition />
    </ul>

    <ul className="Item_container_List_Product">
      <Brand />
      <Category />
      <Product />
      <Exhibition />
    </ul>

    <ul className="Item_container_List_Product">
      <Brand />
      <Category />
      <Product />
      <Exhibition />
    </ul>
  </div>

  );
}

export default ItemList;