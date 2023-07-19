import Bookmark from "./Bookmark";

function Product({ img, name, price, discountPercentage }) {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark/>
        <img className="Item_IMG" src={img} alt="Logo" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name">{name}</p>
          <p className="Item_F">{discountPercentage}%</p>
        </div>
        <p className="Item_P">{price}원</p>
      </div>
    </div>
  );
}

export default Product;
