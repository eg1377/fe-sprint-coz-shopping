import Bookmark from "./Bookmark";

function Category({name , img}) {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark />
        <img className="Item_IMG" src={img} alt="img" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name"># {name}</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
