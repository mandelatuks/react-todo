/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent-props */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        {' '}
        <input
  type="checkbox"
  checked={this.props.todo.completed}
onChange={() => this.props.handleChangeProps()}
        />
        {this.props.todo.title}
        <button type="button" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>

      </li>
    );
  }
}

export default TodoItem;
