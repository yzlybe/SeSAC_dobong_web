import { useState } from "react";

export default function PracticeMapAns() {
  const [userList, setUserList] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //   실제 등록시켜주는 함수
  /* 
- userList state를 변경시켜 재랜더링되도록
- 빈 값이 입력되면 alert 띄우기
- 등록 후에 input 빈 칸 만들기
*/
  const registerUser = () => {
    // 이름과 이메일 값 중 하나라도 안들어왔다면,
    if (name.trim().length === 0 || email.trim().length === 0) {
      return alert("이름과 이메일 모두 작성해주세요.");
    }
    setUserList(
      userList.concat({
        //+ push는 userList에 직접 작용, concat은 새로운 배열을 반환한다.
        id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
        name,
        email,
      })
    );
    setName("");
    setEmail("");
  };

  //   엔터로 등록시켜주는 함수
  const enterRegister = (e) => {
    if (e.key === "Enter") registerUser();
  };

  //   더블클릭했을 때 삭제되는 함수
  const deleteUser = (id) => {
    const newUserList = userList.filter((user) => user.id !== id);
    setList(newUserList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="email"
        placeholder="이메일"
        onKeyDown={(e) => enterRegister(e)}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <button onClick={registerUser}>등록</button>
      {list.map((info) => (
        <h4 key={info.id} onDoubleClick={() => deleteUser(info.id)}>
          {info.name}: {info.email}
        </h4>
      ))}
    </div>
  );
}
