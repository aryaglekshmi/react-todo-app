import { useState, React } from "react";
import "./App.css";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          className="fas fa-plus"
          onClick={(e) => {
            if (toDo !== "") {
              setTodo("");
              setTodos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false },
              ]);
            }
          }}
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  type="checkbox"
                  name=""
                  id={obj.id}
                  value={obj.status}
                  onChange={(e) => {
                    setTodos(
                      toDos.filter((el) => {
                        if (el.id === obj.id) {
                          el.status = e.target.checked;
                        }
                        return el;
                      })
                    );
                  }}
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  onClick={() => {
                    setTodos(toDos.filter((el) => el.id !== obj.id));
                  }}
                ></i>
              </div>
            </div>
          );
        })}
        <div className="subHeading">
          <br />
          <h2>Active ToDo's </h2>
        </div>
        {toDos.map((todo) => {
          if (todo.status) {
            return <h1>{todo.text}</h1>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
