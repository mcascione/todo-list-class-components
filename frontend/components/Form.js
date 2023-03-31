import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form >
          <label>
            <input type="text" />
          </label>
          <button>Add to List</button>
        </form> 
      </div>
    )
  }
}
