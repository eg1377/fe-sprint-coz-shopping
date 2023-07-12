import Bookmark from "./Bookmark";

function Product() {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark/>
        <img className="Item_IMG" src="/images/이미지0.png" alt="Logo" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name">상품이름</p>
          <p className="Item_F">00%</p>
        </div>
        <p className="Item_P">상품 가격</p>
      </div>
    </div>
  );
}

export default Product;
