import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";


function DropdownButton({ userName }) {
  return (
    <div className="dropdown">
      <button className="dropBtn">
        <span className="dropBtn_icon">
          <MenuIcon fontSize="large" />
        </span>
      </button>

      <div className="dropdown-content_A">
        <div className="Polygon">
          <a href="#">
            <img src="/images/Polygon.svg" alt="" />
          </a>
        </div>
        <div className="dropdown-content">
          <a href="#">{userName}님 안녕하세요!</a>
          <a href="#">
            <div className="Gift">
              <div className="GiftCardIcon">
                <img className="IMG_A" src="/images/상품 아이콘.svg" alt="" />
              </div>
              <div className="Menu_A">상품리스트 페이지</div>
            </div>
          </a>
          <a href="#">
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



// function DropdownButton({ userName }) {
//   return (
//     <div className="dropdown">
//       <button className="dropBtn">
//         <span className="dropBtn_icon">
//           <MenuIcon fontSize="large" />
//         </span>
//       </button>

//       <div className="dropdown-content_A">
//         <div className="Polygon">
//           <Link to="/">
//             <img src="/images/Polygon.svg" alt="" />
//           </Link>
//         </div>
//         <div className="dropdown-content">
//           <Link to="/"> {userName}님 안녕하세요! </Link>
//           <Link to="/product-list">
//             <div className="Gift">
//               <div className="GiftCardIcon">
//                 <img className="IMG_A" src="/images/상품 아이콘.svg" alt="" />
//               </div>
//               <div className="Menu_A">상품리스트 페이지</div>
//             </div>
//           </Link>
//           <Link to="/bookmark">
//             <div className="Gift">
//               <div className="GiftCardIcon">
//                 <img
//                   className="IMG_A"
//                   src="/images/북마크 이미지_빈별.svg"
//                   alt=""
//                 />
//               </div>
//               <div className="Menu_A">북마크 페이지</div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DropdownButton;
