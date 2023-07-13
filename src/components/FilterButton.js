import React from "react";

// function FilterButton({ images }) {
//   return (
//     <div>
//       {images.map((img, index) => (
//         <div className="FilterButton" key={index}>
//           <img className="Item_IMG_filter" src={img} alt="IMG" />
//           <p>타입 종류</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FilterButton;


function FilterButton(img) {

  // const srcList =[
  //   "/images/전체.svg",
  //   "/images/브랜드.svg"
  // ];
  
  return (
    <div className="FilterButton">
      <img className="Item_IMG_filter" src = {img} alt="IMG" />
    </div>
  );
}

export default FilterButton;
