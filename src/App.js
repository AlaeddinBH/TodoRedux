
import './App.css';
// import Counter from './components/Counter';
import Todolist from './components/Todolist';
import AddTodo from './components/AddTodo';
import { VisibilityFilter } from './components/VisibilityFilter';




function App() {

  return (
    <div className="todo-app">
      {/* <Counter /> */}
      <h1>ToDo List</h1>
      
      <AddTodo />
      <Todolist />
      <VisibilityFilter />
    </div>
  );
}

export default App;
