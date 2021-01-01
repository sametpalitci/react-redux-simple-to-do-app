import { useState } from 'react';
import { connect } from 'react-redux'
import addTask from './actions/add-task';

const App = (props) => {
  const PropsState = props.state;
  const [getTodoText, setTodoText] = useState("");
  const addTaskClick = (e) => {
    props.onAddTask(getTodoText, 2);
    e.preventDefault();
    setTodoText("");
  }
  const removeTask = (id) => {
    console.log(id)
  }
  return (
    <div >
      <form>
        <input type="text" value={getTodoText} onChange={(todoInput) => setTodoText(todoInput.target.value)} />
        <button type="submit" onClick={addTaskClick}>Add</button>
      </form>
      <ul>
        {
          PropsState.map((n, key) => {
            return (
              <div key={key}>
                <li>{n.todo}, id : {n.id} <button type="submit" onClick={removeTask(n.id)}>Delete</button></li>
                <br />
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return { state }
};

const mapDispatchToProps = {
  onAddTask: addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
