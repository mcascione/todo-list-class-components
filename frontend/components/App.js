import React from 'react';
// import TodoList from './TodoList';
import Form from './Form';
// import Todo from './Todo';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
          {
            name: 'Organize Garage',
            id: 1528817077286, // could look different, you could use a timestamp to generate it
            completed: true
          },
          {
            name: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
      ] 
    };
  }

  submitNewTask = () => {

  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todos:</h1>
        <ul>
          {
            todos.map(todo => {
              return (<li>{todo.name}{ todo.completed?<span> - You did it!</span>:<span></span> }</li>)
            })
          }
        </ul>
        {/* <TodoList />
        <Todo /> */}
        <Form />
        <button>Hide Completed Tasks</button>
      </div>
    )
  }
}
