import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function DropdownButton() {
  return (
    <div class="dropdown">
      <button class="dropBtn">
        <span class="dropBtn_icon">
          <MenuIcon fontSize="large" />
        </span>
      </button>

      <div class="dropdown-content_A" >
        <div className="Polygon">
          <b href="#">
            <img src="/images/Polygon.svg" alt="" />
          </b>
        </div>
        <div class="dropdown-content">
          <a href="#">{}님 안녕하세요!</a>
          <a href="#">
            <div className="Gift">
              <div className="GiftCardIcon">
                <img className="IMG_A" src="/images/상품 아이콘.svg" alt="" />
              </div>
              <div className="Menu_A">상품리스트 페이지</div>
            </div>
          </a>
          <a href="#">
            {" "}
            <div className="Gift">
              <div className="GiftCardIcon">
                <img
                  className="IMG_A"
                  src="/images/북마크 이미지_빈별.svg"
                  alt=""
                />
              </div>
              <div className="Menu_A">북마크 페이지</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DropdownButton;
