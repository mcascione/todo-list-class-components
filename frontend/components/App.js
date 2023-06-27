import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
          {
            name: 'Organize Garage',
            id: 1528817077286, 
            completed: false
          },
          {
            name: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          },
      ] 
    };
  }

  hideCompleted = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (!todo.completed);
      })
    })
  }

  addNewTask = (name) => {
    const newTodo = {
      name:name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  completeTask = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if(todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
        return todo;
      })
    })
  }

  render() {
    return (
      <div className='todo'>
        <h1>What Are You Doing Today?</h1>
        <hr />
        <TodoList completeTask={this.completeTask} todos={this.state.todos}/>
        <hr />
        <div id='controls'>
        <Form addNewTask={this.addNewTask}/>
        <button className='remove-button' onClick={this.hideCompleted}>Remove Completed Tasks</button>
        </div>
      </div>
    )
  }
}
