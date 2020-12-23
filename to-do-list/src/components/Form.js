import React from 'react'
import { Container } from 'react-bootstrap'

const Form = ({ setInputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
    }
    return(
        <Container fluid>
          <form>
            <input onChange = {inputTextHandler} type = "text" className="todo-input" />
                <label for="date"> Date:</label>
                <input type="date" id="date" name="date" />
                <input type="submit" /> 
            <button onClick = {submitTodoHandler} className="todo-button" type="submit">
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