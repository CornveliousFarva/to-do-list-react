import React from 'react'
import { Container } from 'react-bootstrap'

const Form = () => {
    const inputTextHandler = (e) => {
        console.log(e)
    }
    return(
        <Container fluid>
          <form>
          <input type = "text" className="todo-input" />
            <label for="date"> Date:</label>
            <input type="date" id="date" name="date" />
            <input type="submit" /> 
          <button className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
              <select name="todo-items" className="filter-todo">
                  <option value="all">All</option>
                  <option value="Complete">Complete</option>
                  <option value="Incomplete">Incomplete</option>
              </select>
          </div>
        </form>  
        </Container>
    )
}

export default Form