// src/components/TodoInput.tsx

import React, { useState } from 'react';

// Props 타입 정의: 부모(App.tsx)로부터 항목 추가 함수를 받습니다.
interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  // 입력 필드의 값(value)을 관리할 상태를 만듭니다. (React의 핵심!)
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    const text = inputText.trim();
    if (text === '') return;

    onAdd(text); // 부모로부터 받은 함수를 호출하여 항목 추가 요청
    setInputText(''); // 입력 필드 비우기 (상태 업데이트)
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="input-area">
      <input
        type="text"
        id="todo-input" // 기존 CSS 클래스 유지를 위해 id는 남겨둡니다.
        placeholder="새로운 항목 입력"
        value={inputText} // 상태와 입력값을 연결 (제어 컴포넌트)
        onChange={(e) => setInputText(e.target.value)} // 입력값 변경 시 상태 업데이트
        onKeyPress={handleKeyPress}
      />
      <button id="add-button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
