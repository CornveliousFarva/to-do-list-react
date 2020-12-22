import React from 'react'

function Form () {
    return(
        <form>
          <input type = "text" className="todo-input" /> 
          <button className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
          </button>
          <label for="date"> Date:</label>
          <input type="date" id="date" name="date" />
          <input type="submit" />
          <div className="select">
              <select name="todo-items" className="filter-todo">
                  <option value="all">All</option>
                  <option value="Complete">Complete</option>
                  <option value="Incomplete">Incomplete</option>
              </select>
          </div>
        </form>
    )
}

export default Form