import React from "react";
import { useState,useEffect } from "react";


function StateApp() {
  //상태 값 정의
  const [productData, setproductData] = useState([]);

  //useEffect라는 hook 안에서 fetch를 부른다.
  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((response) => {
        //네트워크가 제대로 동작 안 할 때
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((json) => {
        //상태값에 담는다던지
        setproductData(json)
      })
      .catch((error) => console.error(error));
      //데이터를 최초 렌더링 시 한 번만 받아오겠다
  }, []);

  return <div className="App">
    {productData && productData.map((el, _) => {
      return (
        <div>
          {el.title}
          <img src={el.image_url} alt="" />
        </div>
      )
    })}

  </div>;
}
export default StateApp;