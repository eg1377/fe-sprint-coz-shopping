import React from "react";

function FilterButton({img,str}) {

  return (
    <div className="FilterButton">
      <img className="Item_IMG_filter" src = {img} alt="IMG" />
      <p className="Title_Filter">{str}</p>
    </div>
  );
}

export default FilterButton;
