import { graphql, commitMutation } from 'react-relay';
import { environment } from '../relay-utils/environment';
import { ChangeTodoStatusInput } from './__generated__/ChangeTodoStatusMutation.graphql';

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
  mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {
    changeTodoStatus(input: $input) {
      todo {
        id
        complete
      }
    }
  }
`;

export const changeTodoStatus = (input: ChangeTodoStatusInput) => {
  // Now we just call commitMutation with the appropriate parameters
  return commitMutation(environment, {
    mutation,
    variables: {
      input,
    },
  });
};
