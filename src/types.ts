// src/types.ts

// 반드시 'export' 키워드가 앞에 있어야 App.tsx에서 가져올 수 있습니다.
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
