# Reactodo: TypeScript 기반 체크리스트 앱 📝

## 프로젝트 개요

이 프로젝트는 기존의 HTML/CSS/Vanilla JS로 작성된 체크리스트 앱을 React와 TypeScript 환경으로 성공적으로 전환한 프로젝트입니다.

### 주요 목표

- React 컴포넌트 구조 이해 및 분리
- TypeScript 인터페이스를 활용한 타입 안전성 확보
- `useState`와 `useEffect`를 사용한 상태 관리 및 데이터 영속성 구현

## 기술 스택

- **Front-end:** React, TypeScript
- **Build Tool:** Vite
- **State Management:** React Hooks (`useState`, `useEffect`, `useCallback`)
- **Data Persistence:** Local Storage

## 실행 방법

1.  **종속성 설치:**
    ```bash
    npm install
    ```
2.  **개발 서버 실행:**
    ```bash
    npm run dev
    ```

## 구조 (Components)

- `App.tsx`: 최상위 컴포넌트로, 모든 할 일 데이터(`todos`)를 관리합니다.
- `types.ts`: `Todo` 객체의 타입 구조를 정의합니다.
- `TodoInput.tsx`: 새로운 할 일을 입력받고 `App.tsx`로 추가 요청을 보냅니다.
- `TodoList.tsx`: `App.tsx`로부터 목록 데이터를 받아 `TodoItem` 컴포넌트들을 렌더링합니다.
- `TodoItem.tsx`: 개별 할 일 항목(체크박스, 텍스트, 삭제 버튼)을 표시하고, 사용자 액션을 `App.tsx`로 전달합니다.
