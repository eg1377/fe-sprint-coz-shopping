import Bookmark from "./Bookmark";

function Brand() {
  return (
    <div className="Item_IMG_G">
      <div className="add_BookMark">
        <Bookmark/>
        <img className="Item_IMG" src="/images/이미지1.png" alt="Logo" />
      </div>

      <div className="Bottom_Text">
        <div className="Text_top">
          <p className="Item_name">브랜드 이름</p>
          <p className="Item_name2">관심 고객수</p>
        </div>
        <p className="Item_P">00,000</p>
      </div>
    </div>
  );
}

export default Brand;
