import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((li) => li.done === true);
  console.log(doneList);
  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      <ul>
        {doneList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
