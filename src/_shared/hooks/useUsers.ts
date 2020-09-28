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

  const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($email: ID!, $newAttributes: UserAttributesInput!) {
      updateUser(email: $email, newAttributes: $newAttributes) {
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

  const RESET_USERS_MUTATION = gql`
    mutation ResetUsers {
      resetUsers
    }
  `;

  return {
    getAllUsers: useQuery(ALL_USERS_QUERY),
    updateUser: useMutation(UPDATE_USER_MUTATION),
    deleteUsers: useMutation(DELETE_USERS_MUTATION),
    resetUsers: useMutation(RESET_USERS_MUTATION),
  };
};
