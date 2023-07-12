import Bookmark from "./Bookmark";

function Category() {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark />
        <img className="Item_IMG" src="/images/이미지2.png" alt="Logo" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name"># 카테고리 이름</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
