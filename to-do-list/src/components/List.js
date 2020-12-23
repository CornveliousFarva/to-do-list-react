import React from 'react'
import Todo from './Todo'

const List = () => {
    return(
      <div className="todo-container">
        <ul className="todo-list"></ul>
          <Todo />
    </div>  
    )
}

export default List