import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

export const useUsers = () => {
  const ALL_USERS_QUERY = gql`
    query {
      allUsers {
        email
        name
        role
      }
    }
  `;

  const DELETE_USERS_MUTATION = gql`
    mutation DeleteUsers($emails: [ID]!) {
      deleteUsers(emails: $emails)
    }
  `;

  return {
    getAllUsers: useQuery(ALL_USERS_QUERY),
    deleteUsers: useMutation(DELETE_USERS_MUTATION),
  };
};
