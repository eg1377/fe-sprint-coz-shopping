import FilterButton from "./FilterButton";

function FilterContainer() {
    const srcList =[
    "/images/전체.svg",
    "/images/브랜드.svg"
  ];

  return (
    <div>
    <ul className="Filter_container">
    <div>
      {FilterButton(srcList[0])}
      <p>타입 종류</p>
    </div>
    <div>
      {FilterButton(srcList[1])}
      <p>타입 종류</p>
    </div>

      <FilterButton/>
      <FilterButton/>
      <FilterButton/>
    </ul>
  </div>
);
}

export default FilterContainer;

// import React from "react";
// import FilterButton from "./FilterButton";

// const imagePaths = [
//   "/images/이미지1.png",
//   "/images/이미지2.png",
//   "/images/이미지3.png",
//   "/images/이미지4.png",
//   "/images/이미지5.png"
// ];

// function FilterContainer() {
//   return (
//     <div>
//       <ul className="Filter_container">
//         {imagePaths.map((image, index) => (
//           <FilterButton key={index} images={[{ img: image }]} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FilterContainer;
