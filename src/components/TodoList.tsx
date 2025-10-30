// src/components/TodoList.tsx

import type { Todo } from '../types.ts';
import TodoItem from './TodoItem'; // TodoItem 컴포넌트 가져오기

interface TodoListProps {
  todos: Todo[];
  // App.tsx로부터 받을 함수들도 여기에 추가합니다.
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>할 일이 없습니다. 💪</p>
      ) : (
        // 👈 기존 HTML의 id="todo-list"를 ul에 추가
        <ul id="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
