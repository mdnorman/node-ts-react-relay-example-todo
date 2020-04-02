import * as React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from '../relay-utils/environment';
import { TodoList } from '../components/TodoList';
import { MainQueryResponse } from './__generated__/MainQuery.graphql';

const MainQuery = graphql`
  query MainQuery {
    viewer {
      id
      ...TodoList_user
    }
  }
`;

export interface MainProps {}

type MainCreated = {
  error: Error | null;
  props: MainQueryResponse | null;
  retry: (() => void) | null;
};

export class Main extends React.Component<MainProps> {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={MainQuery}
        variables={{}}
        render={({ error, props }: MainCreated) => {
          if (error) {
            return (
              <div style={{ color: 'red' }}>
                <div>ERROR: {error.message}.</div>
                {error.stack && <pre>{error.stack}</pre>}
              </div>
            );
          }

          if (!props) {
            return <div>Loading...</div>;
          }

          console.log('Main props:', props);

          if (!props.viewer) {
            return <div>No Viewer!</div>;
          }

          return (
            <div>
              <div>User: {props.viewer.id}</div>
              <br />
              <TodoList user={props.viewer} />
            </div>
          );
        }}
      />
    );
  }
}
