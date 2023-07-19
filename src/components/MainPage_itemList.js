import React from "react";
import Product from "../components/Product";
import "./style.css";
import Category from "../components/Category";
import Exhibition from "../components/Exhibition";
import Brand from "../components/Brand";
import { useState, useEffect } from "react";
import axios from "axios";

function MainPage_itemList() {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // useEffect 훅을 사용하여 API 데이터 가져오기
  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // 필터링할 타입 값
  const selected = ["Brand", "Category", "Product", "Exhibition"];

  // selectedType을 기준으로 필터링하여 해당하는 데이터 선택
  useEffect(() => {
    const filteredData = productData.filter((item) =>
      selected.includes(item.type)
    );
    setFilteredData(filteredData);
  }, [productData, selected]);

  // 중복되지 않는 데이터 필터링하기
  const uniqueData = selected
    .map((type) => {
      const item = filteredData.find((item) => item.type === type);
      return item ? { ...item } : null;
    })
    .filter(Boolean);

  return (
    <div className="List_main">
      <div className="first_List">
        <div className="Part1">
          <p className="Item_List">상품 리스트</p>
          <div className="Item_container">
            <ul className="Item_container_List">
              {/* Exhibition */}
              {uniqueData
                .filter((item) => item.type === "Exhibition")
                .map((item, index) => (
                  <div key={index}>
                    <Exhibition
                      img={item.image_url}
                      title={item.title}
                      sub_title={item.sub_title}
                    />
                  </div>
                ))}

              {/* Product */}
              {uniqueData
                .filter((item) => item.type === "Product")
                .map((item, index) => (
                  <div key={index}>
                    <Product
                      img={item.image_url}
                      name={item.title}
                      price={item.price}
                      discountPercentage={item.discountPercentage}
                    />
                  </div>
                ))}

              {/* Category */}
              {uniqueData
                .filter((item) => item.type === "Category")
                .map((item, index) => (
                  <div key={index}>
                    <Category img={item.image_url} name={item.title} />
                  </div>
                ))}

              {/* Brand */}
              {uniqueData
                .filter((item) => item.type === "Brand")
                .map((item, index) => (
                  <div key={index}>
                    <Brand
                      img={item.brand_image_url}
                      name={item.brand_name}
                      customers={item.customers}
                      itemId={item.follower}
                    />
                  </div>
                ))}
            </ul>
          </div>
        </div>
        <div className="Part2">
          <p className="Item_List">북마크 리스트</p>
          <div className="Item_container">
            <ul className="Item_container_List">
              {/* Exhibition */}
              {uniqueData
                .filter((item) => item.type === "Exhibition")
                .map((item, index) => (
                  <div key={index}>
                    <Exhibition
                      img={item.image_url}
                      title={item.title}
                      sub_title={item.sub_title}
                    />
                  </div>
                ))}

              {/* Product */}
              {uniqueData
                .filter((item) => item.type === "Product")
                .map((item, index) => (
                  <div key={index}>
                    <Product
                      img={item.image_url}
                      name={item.title}
                      price={item.price}
                      discountPercentage={item.discountPercentage}
                    />
                  </div>
                ))}

              {/* Category */}
              {uniqueData
                .filter((item) => item.type === "Category")
                .map((item, index) => (
                  <div key={index}>
                    <Category img={item.image_url} name={item.title} />
                  </div>
                ))}

              {/* Brand */}
              {uniqueData
                .filter((item) => item.type === "Brand")
                .map((item, index) => (
                  <div key={index}>
                    <Brand
                      img={item.brand_image_url}
                      name={item.brand_name}
                      customers={item.customers}
                      itemId={item.follower}
                    />
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage_itemList;
