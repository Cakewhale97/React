import "../styles/modules/Todo.css";
import "../styles/modules/TodoList.css";
export default function TodoList({ todos }) {
    return (
        <ul className="TodoList">
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
}




