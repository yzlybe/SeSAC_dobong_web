import { Todo } from "../../types/interface";

interface Props {
  todo: Todo;
  toggle: (id: number) => void;
}

export default function TodoItem({ todo, toggle }: Props) {
  return (
    <li>
      <label>
        <input type="checkbox" onChange={() => toggle(todo.id)} />
        {todo.text}
      </label>
    </li>
  );
}
