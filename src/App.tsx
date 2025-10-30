// src/App.tsx

import { useState, useCallback, useEffect } from 'react'; // 👈 useEffect import
import type { Todo } from './types.ts';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

// 로컬 스토리지 키 정의 (기존 JS 코드와 동일하게)
const STORAGE_KEY = 'customChecklist';

// 초기 할 일 목록을 로컬 스토리지에서 불러오는 함수
const getInitialTodos = (): Todo[] => {
  const savedTodos = localStorage.getItem(STORAGE_KEY);
  // 저장된 데이터가 있으면 JSON.parse로 변환하여 사용
  if (savedTodos) {
    // 로컬 스토리지에 id가 없을 수 있으므로, 임시로 1부터 순서대로 id를 부여합니다.
    const parsed = JSON.parse(savedTodos);
    return parsed.map((item: Omit<Todo, 'id'>, index: number) => ({
      ...item,
      id: index + 1, // 로컬 스토리지에서 불러올 때 임시 ID 부여
    }));
  }
  // 없으면 빈 배열 반환
  return [];
};

function App() {
  // 1. 초기 상태를 로컬 스토리지에서 불러온 값으로 설정
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // 2. 마지막 ID를 추적하여 새로운 ID를 만듭니다. (불러온 데이터 개수 + 1)
  const [nextId, setNextId] = useState(
    todos.length > 0 ? todos[todos.length - 1].id + 1 : 1
  );

  // 3. [핵심] todos 상태가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    // todos 배열이 바뀔 때마다 실행됨
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));

    // todos가 비어있지 않다면, 다음 ID를 가장 마지막 ID + 1로 업데이트합니다.
    if (todos.length > 0) {
      setNextId(todos[todos.length - 1].id + 1);
    } else {
      setNextId(1); // 목록이 비면 ID를 1부터 다시 시작
    }
  }, [todos]); // 👈 todos 배열이 변경될 때만 이 함수를 실행

  // --- 기존 함수들은 그대로 유지 ---
  const handleAdd = useCallback(
    (text: string) => {
      const newTodo: Todo = {
        id: nextId,
        text: text,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      // setNextId는 useEffect에서 처리하므로 여기서 제거합니다.
    },
    [nextId]
  );

  // handleDelete, handleToggle 함수는 기존 코드와 동일하게 유지
  const handleDelete = useCallback((idToDelete: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToDelete));
  }, []);

  const handleToggle = useCallback((idToToggle: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);
  // ------------------------------

  return (
    <div className="container">
      <h1>나만의 체크리스트 📝</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
