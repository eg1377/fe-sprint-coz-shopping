import Bookmark from "./Bookmark";

function Exhibition() {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark/>
        <img className="Item_IMG" src="/images/이미지3.png" alt="Logo" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name">기획전 이름</p>
          
        </div>
        <p className="Item_P1">기획전 설명</p>
      </div>
    </div>
  );
}

export default Exhibition;
