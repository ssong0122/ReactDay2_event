import React, { useState } from "react";

const ListDemo = () => {
  //STEP1) 컴포넌트 화면에서 사용할 데이터의 구조를 정의하고 값을 초기화한다.
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      product: "삼성 노트북",
      price: 1000,
      stock: 100,
      provider: "samsung",
    },
    { id: 2, product: "LG 노트북", price: 2000, stock: 10, provider: "LG" },
    {
      id: 3,
      product: "한성 노트북",
      price: 3000,
      stock: 20,
      provider: "hansung",
    },
    { id: 4, product: "HP 노트북", price: 4000, stock: 1, provider: "hp" },
  ]);

  //입력 요소 데이터
  const [inputText, setInputText] = useState("");

  //STEP3)이벤트 처리기 함수를 정의하고 기능을 구현한다.
  const onTextChange = (e) => {
    setInputText(e.target.value);
  };

  const onTextAdd = () => {
    // concat : 배열에다 추가하는 메소드
    //names배열에 concat메소드를 통해 신규 객체를 추가하고 해당 배열을 신규 배열 객체로 저장한다.
    const nextNames = names.concat({ id: 4, text: inputText });

    //배열 세터 함수의 값으로 신규 배열 객체를 저장한다.
    setNames(nextNames);

    //입력 요소의 값을 초기화해준다.
    setInputText("");
  };

  //배열 객체 map 메소드는 배열 내 값을 추출해서 반복적으로 지정된 기능을 실행시킨다.
  const namesList = names.map((name) => <li>{name.text}</li>);
  return (
    <div>
      {/* STEP2)데이터 내용을 표현할 화면(UI)를 구현한다. */}
      <input value={inputText} onChange={onTextChange}></input>
      <button onClick={onTextAdd}>추가하기</button>
      {/* 데이터 목록 출력 */}
      {/* {namesList} */}
      {names.map((name) => (
        <li>{name.text}</li>
      ))}
    </div>
  );
};

export default ListDemo;
