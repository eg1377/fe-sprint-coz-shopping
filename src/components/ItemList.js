import Product from "../components/Product";
import Category from "../components/Category";
import Exhibition from "../components/Exhibition";
import Brand from "../components/Brand";
import { useState, useEffect } from "react";

function ItemList() {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // useEffect 훅을 사용하여 API 데이터 가져오기
  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        setProductData(json);
      })
      .catch((error) => console.error(error));
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

  // 추출한 데이터
  const extractedData = filteredData.length > 0 ? [filteredData[0]] : [];

  return (
    <div className="Item_container_Product">
      <ul className="Item_container_List_Product">
        {/* Product */}

        {extractedData.map((item, index) => (
          <div key={index}>
            <Product
              img={item.image_url}
              name={item.brand_name}
              customers={item.customers}
              itemId={item.itemId}
            />
          </div>
        ))}
        {/* Exhibition */}
        {extractedData.map((item, index) => (
          <div key={index}>
            <Exhibition
              img={item.image_url}
              name={item.brand_name}
              customers={item.customers}
              itemId={item.itemId}
            />
          </div>
        ))}

        {extractedData.map((item, index) => (
          <div key={index}>
            <Category img={item.image_url} name={item.title} />
          </div>
        ))}

        {extractedData.map((item, index) => (
          <div key={index}>
            <Brand
              img={item.image_url}
              name={item.brand_name}
              customers={item.follower}
              itemId={item.id}
            />
          </div>
        ))}
      </ul>

      <ul className="Item_container_List_Product">
        <Brand />
        <Category />
        <Product />
        <Exhibition />
      </ul>

      <ul className="Item_container_List_Product">
        <Brand />
        <Category />
        <Product />
        <Exhibition />
      </ul>
    </div>
  );
}

export default ItemList;
