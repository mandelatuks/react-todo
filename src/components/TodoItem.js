import React from "react"

function TodoItem(props) {
 return (
  <div>
    <input type="checkbox"  checked  onChange={() => this.props.handleChangeProps()}/> {props.todo.title}
  </div>
)
}

export default TodoItem