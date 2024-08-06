import React from "react";

function App() {
  const [task, setTask] = React.useState([]);
  const [taskTemp, setTaskTemp] = React.useState('');

  function addTarefa() {
    setTask([...task, taskTemp]);
    setTaskTemp('');
  }

  return (
    <div className="App">
      <input data-testid={"task-input"} type="text" value={taskTemp} onChange={e => setTaskTemp(e.target.value)} />
      <button data-testid={"add-task-button"} onClick={addTarefa} type="button">add task</button>
      <ul>
        {task.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
