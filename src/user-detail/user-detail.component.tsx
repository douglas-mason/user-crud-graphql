import React, { useState } from 'react';
import { Button } from '../_shared/components/button/button.component';
import { useRouter } from '../_shared/hooks/useRouter';
import { RadioButton } from '../_shared/components/button/radio-button.component';
import './user-detail.styles.scss';
import { useUsers } from '../_shared/hooks/useUsers';

export const UserDetail = () => {
  const {
    location: { params },
    setLocation,
  } = useRouter();
  const {
    getAllUsers: { refetch },
    updateUser: [updateUser],
  } = useUsers();
  const [name, setName] = useState(params ? params.user.name : '');
  const [role, setRole] = useState(params ? params.user.role : '');
  if (!params || !params.user) {
    return <div>no user</div>;
  }

  const isChecked = (value: string) => role === value;

  const onRoleChange = (value: string) => {
    setRole(value);
  };

  const onSaveClick = async () => {
    await updateUser({
      variables: {
        email: params.user.email,
        newAttributes: {
          name,
          role,
        },
      },
    });
    await refetch();
    setLocation({ name: 'dashboard' });
  };

  return (
    <section>
      <div>
        <h1>{params.user.email}</h1>
        <Button onClick={onSaveClick} type="primary" text="Save"></Button>
      </div>
      <form>
        <div>
          <label>
            <input defaultValue={name} onChange={(e) => setName(e.currentTarget.value)} />
          </label>
        </div>
        <div className="user-detail__role-container">
          Role
          <RadioButton
            onChange={onRoleChange}
            groupName="role"
            value="ADMIN"
            isChecked={isChecked}
            label="Admin"
          />
          <RadioButton
            onChange={onRoleChange}
            groupName="role"
            value="DEVELOPER"
            isChecked={isChecked}
            label="Developer"
          />
          <RadioButton
            onChange={onRoleChange}
            groupName="role"
            value="APP_MANAGER"
            isChecked={isChecked}
            label="App Manager"
          />
          <RadioButton
            onChange={onRoleChange}
            groupName="role"
            value="MARKETING"
            isChecked={isChecked}
            label="Marketing"
          />
          <RadioButton
            onChange={onRoleChange}
            groupName="role"
            value="SALES"
            isChecked={isChecked}
            label="Sales"
          />
        </div>
      </form>
    </section>
  );
};
