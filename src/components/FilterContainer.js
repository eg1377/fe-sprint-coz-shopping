import React from "react";
import FilterButton from "./FilterButton";

function FilterContainer() {
  const srcList = [
    "/images/전체.svg",
    "/images/상품.svg",
    "/images/카테고리.svg",
    "/images/기획전.svg",
    "/images/브랜드.svg",
  ];

  const strList = [
    '전체',
    '상품',
    '카테고리',
    '기획전',
    '브랜드',
  ];

  return (
    <div>
      <div className="Filter_container">
        {srcList.map((src, index) => (
          <div key={index}>
            <FilterButton img={src} str={strList[index]} /> 
            {/* img와 str에 값을 전달 */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterContainer;
