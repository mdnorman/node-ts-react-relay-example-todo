import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Todo as TodoModel } from '../models/Todo';
import { changeTodoStatus } from '../mutations/ChangeTodoStatusMutation';

interface TodoProps {
  todo: TodoModel;
}

export class TodoComponent extends React.Component<TodoProps> {
  render() {
    console.log('Todo props:', this.props);

    return (
      <div>
        <div>ID: {this.props.todo.id}</div>
        <div>Text: {this.props.todo.text}</div>
        <div>
          Complete? <input type="checkbox" checked={this.props.todo.complete} onClick={() => this.onCompleteCheck()} />
        </div>
        <br />
      </div>
    );
  }

  onCompleteCheck() {
    if (this.props.todo.complete) {
      console.log('Setting to NOT complete!');
      changeTodoStatus(this.props.todo.id, false);
    } else {
      console.log('Setting to complete!');
      changeTodoStatus(this.props.todo.id, true);
    }
  }
}

export const Todo = createFragmentContainer(
  TodoComponent,
  graphql`
    fragment Todo_todo on Todo {
      id
      text
      complete
    }
  `,
);
