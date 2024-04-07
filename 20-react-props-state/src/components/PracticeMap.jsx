import { useState } from "react";

export default function PracticeMap() {
  const [list, setList] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const addInfo = () => {
    if (inputName.trim().length === 0 || inputEmail.trim().length === 0) return;
    const newInfo = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: inputName,
      email: inputEmail,
    });
    setList(newInfo);
    setInputName("");
    setInputEmail("");
  };
  const putEnter = (e) => {
    if (e.key === "Enter") {
      addInfo();
    }
  };
  const deleteInfo = (id) => {
    const newInfo = list.filter((info) => info.id !== id);
    setList(newInfo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        value={inputName}
      />
      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        value={inputEmail}
        onKeyDown={(e) => putEnter(e)}
      />
      <button onClick={addInfo}>등록</button>
      {list.map((info) => (
        <h3 key={info.id} onDoubleClick={() => deleteInfo(info.id)}>
          {info.name}: {info.email}
        </h3>
      ))}
    </div>
  );
}
