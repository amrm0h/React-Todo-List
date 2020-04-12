import React from 'react';
import TodoListPage from "./screens/TodoListPage";
import {Header} from "./components/Header";

import "normalize.css";
import "./shared/css/app.scss";

const App = () => {
  return (
    <div className="App container">
      <Header />
      <TodoListPage />
    </div>
  );
}

export default App;