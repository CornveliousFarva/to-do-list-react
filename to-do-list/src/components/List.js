import React from 'react'
import Todo from './Todo'

const List = ({ todos }) => {

    return(
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo />
          ))}
        </ul>
          <Todo />
    </div>  
    )
}

export default List