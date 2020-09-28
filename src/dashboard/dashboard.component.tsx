import React, { useState } from 'react';
import { Button } from '../_shared/components/button/button.component';
import { Table } from '../_shared/components/table/table.component';
import { useUsers } from '../_shared/hooks/useUsers';
import './dashboard.styles.scss';

export const Dashboard = () => {
  const {
    getAllUsers: { loading, error, data, refetch },
    deleteUsers: [deleteUsers],
    resetUsers: [resetUsers],
  } = useUsers();

  const [usersPendingDeletion, setUsersPendingDeletion] = useState<string[]>([]);

  const onResetUsersClick = async () => {
    await resetUsers();
    await refetch();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  if (!data.allUsers || !data.allUsers.length) {
    return (
      <div>
        <p>No Users Found</p>
        <Button onClick={onResetUsersClick} type="primary" text="Reset Users"></Button>
      </div>
    );
  }

  const onDeleteClick = async () => {
    await deleteUsers({
      variables: {
        emails: usersPendingDeletion,
      },
    });
    setUsersPendingDeletion([]);
    refetch();
  };

  return (
    <section className="dashboard">
      <div>
        <h1>Users</h1>
        <Button
          type="danger"
          inverted
          onClick={onDeleteClick}
          text="Delete"
          disabled={!usersPendingDeletion.length}
        ></Button>
      </div>
      <section className="dashboard__results">
        <Table
          headers={['email', 'name', 'role']}
          rows={data.allUsers}
          onSelectedItemsChange={setUsersPendingDeletion}
        />
      </section>
    </section>
  );
};
