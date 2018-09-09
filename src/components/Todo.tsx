import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

interface TodoProps {
  todo: {
    id: string;
    text: string;
    complete: boolean;
  };
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
