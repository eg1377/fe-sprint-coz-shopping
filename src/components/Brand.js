import Bookmark from "./Bookmark";

function Brand({ img, name, itemId }) {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark />
        <img className="Item_IMG" src={img} alt="Logo" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name">{name}</p>
          <p className="Item_name2">관심 고객수</p>
        </div>
        <p className="Item_P">{itemId}</p>
      </div>
    </div>
  );
}

export default Brand;
