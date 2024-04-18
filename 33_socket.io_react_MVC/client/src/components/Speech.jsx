export default function Speech({ chat }) {
  /* 
    chat = {
      type: "me", // me, other, notice
      content: "내가 작성한 메세지",
      isDm: true | undefined
      name: "asdf" // 보낸 사람의 닉네임
    },
    {
      type: "other",
      content: "다른 사람이 작성한 메세지",
    },
    */
  // console.log(chat);
  return (
    <>
      <div className={`speech ${chat.type} ${chat.isDm ? "dm" : ""}`}>
        {/*+ chat.isDm && "dm" 을 쓰면 dm이 아닐 경우 false를 반환해서 false 클래스를 생성해버린다 */}
        {chat.type === "other" && <span className="nickname">{chat.name}</span>}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
