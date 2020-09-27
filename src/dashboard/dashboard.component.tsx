import React, { useState } from 'react';
import { Button } from '../_shared/components/button/button.component';
import { Table } from '../_shared/components/table/table.component';
import { useUsers } from '../_shared/hooks/useUsers';
import './dashboard.styles.scss';

export const Dashboard = () => {
  const {
    getAllUsers: { loading, error, data },
    deleteUsers: [deleteUsers],
  } = useUsers();

  const [usersPendingDeletion, setUsersPendingDeletion] = useState<string[]>([]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  const onDeleteClick = () => {
    deleteUsers({
      variables: {
        emails: usersPendingDeletion,
      },
    });
  };

  return (
    <section className="dashboard">
      <div>
        <h1>Users</h1>
        <Button type="danger" inverted onClick={onDeleteClick} text="Delete"></Button>
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
