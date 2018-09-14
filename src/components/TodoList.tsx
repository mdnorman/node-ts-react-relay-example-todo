import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Todo } from './Todo';
import { TodoList_user } from './__generated__/TodoList_user.graphql';

interface TodoListProps {
  user: TodoList_user;
}

class TodoListComponent extends React.Component<TodoListProps> {
  render() {
    console.log('TodoList props:', this.props);

    if (this.props.user.todos.edges.length === 0) {
      return <div>Todo list empty. Check Check!!</div>;
    }

    return <div>Todo: {this.props.user.todos.edges.map(({ node }) => <Todo key={node.id} todo={node} />)}</div>;
  }
}

export const TodoList = createFragmentContainer(
  TodoListComponent,
  graphql`
    fragment TodoList_user on User {
      todos {
        edges {
          node {
            id
            ...Todo_todo
          }
        }
      }
    }
  `,
);
