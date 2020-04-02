import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { changeTodoStatus } from '../mutations/ChangeTodoStatusMutation';
import { Todo_todo } from './__generated__/Todo_todo.graphql';

interface TodoProps {
  todo: Todo_todo;
}

export class TodoComponent extends React.Component<TodoProps> {
  render() {
    console.log('Todo props:', this.props);

    return (
      <div>
        <div>ID: {this.props.todo.id}</div>
        <div>Text: {this.props.todo.text}</div>
        <div>
          Complete?
          <input type="checkbox" checked={this.props.todo.complete} onClick={() => this.onCompleteCheck()} />
        </div>
        <br />
      </div>
    );
  }

  onCompleteCheck() {
    if (this.props.todo.complete) {
      console.log('Setting to NOT complete!');
      changeTodoStatus({ id: this.props.todo.id, complete: false });
    } else {
      console.log('Setting to complete!');
      changeTodoStatus({ id: this.props.todo.id, complete: true });
    }
  }
}

export const Todo = createFragmentContainer(TodoComponent, {
  todo: graphql`
    fragment Todo_todo on Todo {
      id
      text
      complete
    }
  `,
});
