import React, { useState } from "react";

const EventDemo2 = () => {
  const [user, setUser] = useState({
    userid: "",
    username: "",
    email: "",
    telephone: "",
    address: "",
  });

  //데이터 처리 결과 표시용 데이터 정의
  const [resultMsg, setResultMsg] = useState("");

  //사용자 입력 폼 요소에서 전달된 데이터를 user state의 각 속성에 데이터 바인딩 처리한다.
  //멀티 UI 요소와 state 속성에 대한 바인딩 처리
  const onChangeUserInfo = (e) => {
    //spread연산자(...)를 이용한 데이터 수정
    const newUser = { ...user, [e.target.name]: e.target.value };
    setUser(newUser);

    //19-20 합쳐서 쓰면 ==> setUser({ ...user, username: e.target.value });
  };

  //사용자 정보 지정 이벤트 처리 함수
  const onSave = () => {
    //백엔드 API로 user 단일 객체를 전송하고 저장합니다.
    console.log("현재 사용자 데이터 :", user);

    //처리 결과 표시
    setResultMsg("저장 완료");
  };

  return (
    <div>
      <h1>회원 가입 폼</h1>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>회원아이디</td>
            {/* name값은 객체의 속성명과 동일해야 함 */}
            {/* 입력 요소의 name 특성 값을 반드시 바인딩되는 객체의 속성명으로 지정한다. */}
            <td>
              <input
                type="text"
                name="userid"
                value={user.userid}
                onChange={onChangeUserInfo}
              />
            </td>
          </tr>
          <tr>
            <td>회원 이름</td>
            <td>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={onChangeUserInfo}
              />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeUserInfo}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="telephone"
                value={user.telephone}
                onChange={onChangeUserInfo}
              />
            </td>
          </tr>
          <tr>
            <td>주소</td>
            <td>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={onChangeUserInfo}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={onSave}>저장</button>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h1>{resultMsg}</h1>
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default EventDemo2;
