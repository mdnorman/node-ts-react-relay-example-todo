import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Todo as TodoModel } from '../models/Todo';

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
        <div>Complete: {this.props.todo.complete ? 'Yes' : 'No'}</div>
        <br />
      </div>
    );
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
