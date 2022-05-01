import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormBasic from "./components/FormBasic";
import Hash from "./components/Hash";
import LocalStorage from "./components/LocalStorage";
import WindowSize from "./components/WindowSize";
import Home from "./features/home/Home";
import Todo from "./features/todo/Todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/hook/hash" element={<Hash />} />
          <Route path="/hook/windowSize" exact element={<WindowSize />} />
          <Route path="/hook/localStorage" exact element={<LocalStorage />} />
          <Route path="/hook/formBasic" exact element={<FormBasic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
