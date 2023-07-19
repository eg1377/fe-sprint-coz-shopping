import Bookmark from "./Bookmark";

function Exhibition({ img, title, sub_title }) {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark/>
        <img className="Item_IMG" src={img} alt="Logo" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name">{title}</p>
          
        </div>
        <p className="Item_P1">{sub_title}</p>
      </div>
    </div>
  );
}

export default Exhibition;
