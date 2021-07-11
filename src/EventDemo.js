import React, { useState } from "react";

const EventDemo = () => {
  //사용자 이름을 저장하는 상태값 정의 및 초기값 할당
  const [username, setUserName] = useState("");
  const [email, setUserEmail] = useState("");

  //데이터 저장 처리 이벤트 함수
  const onSave = () => {
    //백엔드에 사용자 정보 저장 API를 호출하고 관련 상태값(username)을 백엔드로 JSON형식으로 DB에 영구히 저장처리한다.
    console.log("브라우저 콘솔에 현재 상태값을 출력해봅니다.", username);
    alert(username);
  };

  //텍스트 박스의 값이 변경될 때마다 호출되는 이벤트 핸들러 함수
  const onChangeUserName = (e) => {
    //매개변수 e = onChange를 매개변수로 받음(현재 입력한 값을 매개변수로 받는 것)
    //사용자가 입력박스에서 값을 변경할 때마다 즉시 해당 UI요소의 값을 이용
    //setUserName 세터 함수에 UI 입력 요소값을 전달해서 username 상태 값을 반영해준다.
    setUserName(e.target.value);
  };

  //사용자 메일 정보에 대한 UI요소와 Data State간 동기화 처리
  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  //입력 요소에 키보드 키 눌림 이벤트가 발생하면 실행되는 이벤트 처리기 함수
  const onEmailDoubleCheck = (e) => {
    if (e.key === "Enter") {
      alert("키코드는 : " + e.charCode);
      console.log("백엔드 API를 호출해 이메일 주소 중복 체크를 실행합니다.");
    }
  };

  //바인딩 되어 있는 state 값을 초기화하여 입력 요소의 값을 초기화한다.
  const onInit = () => {
    setUserName("");
    setUserEmail("");
  };

  return (
    <div>
      <h1>함수형 컴포넌트 이벤트 실습1</h1>
      {/* input 박스에 value를 사용할 경우 onChange 함수가 반드시 필요. 안 쓰면 에러 발생 (onChange는 input값이 변경될 때마다 호출되는 함수) */}
      <input
        type="text"
        name="username"
        placeholder="이름을 입력해주세요."
        value={username}
        onChange={onChangeUserName}
      />
      <br></br>
      <input
        type="text"
        name="email"
        placeholder="아이디로 사용할 이메일을 입력해주세요."
        value={email}
        onChange={onChangeEmail}
        onKeyPress={onEmailDoubleCheck}
      />
      <br></br>
      사용자 이름 : {username}
      <br></br>
      <hr></hr>
      <button onClick={onSave}>저장</button>
      <button>수정</button>
      <button onClick={onInit}>초기화</button>
    </div>
  );
};

export default EventDemo;
