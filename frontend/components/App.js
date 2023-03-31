import React from 'react';
// import TodoList from './TodoList';
import Form from './Form';
// import Todo from './Todo';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      message: "" //update this later
    };
  }

  submitNewTask = () => {

  }



  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <ul>
          <li>Complete your Homework</li>
          <li>Do the Laundry</li>
          <li>Exercise!</li>
        </ul>
        {/* <TodoList />
        <Todo /> */}
        <Form />
        <button>Hide Completed Tasks</button>
      </div>
    )
  }
}
