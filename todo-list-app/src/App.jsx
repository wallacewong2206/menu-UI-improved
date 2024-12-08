import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  }

  return (
    <div className="m-3">
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter a new todo"
      />
      <Button variant="primary" className="ms-3" onClick={addTodo}>
        Add
      </Button>
      <ul className="mt-3">
        {todos.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
