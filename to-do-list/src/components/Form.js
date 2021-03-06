import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, 
                {text: inputText, completed: false, id: Math.random () * 1000}
        ])
        setInputText('')
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return(
        <Container fluid>
            <Row>
                <Col>
                 <form>
                    <input value = {inputText}
                            onChange = {inputTextHandler} 
                            type = "text" 
                            className="todo-input" />
                {/* <label for="date"> Date:</label>
                <input type="date" id="date" name="date" />
                <input type="submit" />  */}
            <button onClick = {submitTodoHandler} className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
        <Row>
            <Col>
                <div className="select">
                <select onChange={statusHandler} name="todo-items" className="filter-todo">
                    <option value="all">All</option>
                    <option value="Complete">Complete</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            </Col>
        </Row>
          
          {/* <div className="importance">
              <select name="todo-importance" className="filter-importance">
                  <option value="very">Very Important</option>
                  <option value="somewhat">Somewhat Important</option>
                  <option value="low">Not Important</option>
              </select>
          </div> */}
        </form>  
    </Col>
</Row>
         
        </Container>
    )
}

export default Form