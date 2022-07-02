import TodoItem from "./TodoItem";

export default function Todolist({ todos, handleToggle, handleDelet }) {
  // const {title="name"} = props;
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          status={todo.status}
          handalToggle={handleToggle}
          handleDelet={handleDelet}
        />
      ))}
    </div>
  );
}
