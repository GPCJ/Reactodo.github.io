// src/components/TodoItem.tsx

import type { Todo } from '../types.ts';
import React from 'react';

// Props 타입 정의: TodoItem이 받을 데이터와 함수
interface TodoItemProps {
  todo: Todo;
  // 부모에게 '이 항목의 ID를 삭제해 주세요'라고 알릴 함수를 받습니다.
  onDelete: (id: number) => void;
  // '이 항목의 완료 상태를 바꿔주세요'라고 알릴 함수를 받습니다.
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    // 👈 1. 항목 전체를 감싸는 <li>에 필요한 클래스 추가
    // 기존 CSS에서 #todo-list li 선택자를 사용했으므로 클래스 대신 직접 li에 적용.
    <li className={todo.completed ? 'completed' : ''}>
      {/* 2. 체크박스 - 그대로 유지 */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {/* 👈 3. 텍스트 부분에 필요한 클래스 추가 */}
      <span className="todo-item-text">{todo.text}</span>

      {/* 👈 4. 삭제 버튼에 필요한 클래스 추가 */}
      <button
        // Vanilla JS 코드에 있던 delete-button 클래스 추가
        className="delete-button"
        onClick={() => onDelete(todo.id)}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
