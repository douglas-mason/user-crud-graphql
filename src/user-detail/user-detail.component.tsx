import React, { useState } from 'react';
import { Button } from '../_shared/components/button/button.component';
import { useRouter } from '../_shared/hooks/useRouter';
import './user-detail.styles.scss';

export const UserDetail = () => {
  const {
    location: { params },
  } = useRouter();
  const [name, setName] = useState(params ? params.user.name : '');
  const [role, setRole] = useState(params ? params.user.role : '');
  if (!params || !params.user) {
    return <div>no user</div>;
  }

  const isChecked = (value: string) => params.user.role === value;

  return (
    <section>
      <div>
        <h1>{params.user.email}</h1>
        <Button type="primary" text="Save"></Button>
      </div>
      <div>
        <div>
          <label>
            <input defaultValue={name} onChange={(e) => setName(e.currentTarget.value)} />
          </label>
        </div>
        <div className="user-detail__role-container">
          Role
          <label>
            <input checked={isChecked('ADMIN')} name="role" type="radio" value="ADMIN"></input>
            Admin
          </label>
          <label>
            <input
              checked={isChecked('DEVELOPER')}
              name="role"
              type="radio"
              value="DEVELOPER"
            ></input>
            Developer
          </label>
          <label>
            <input
              checked={isChecked('APP_MANAGER')}
              name="role"
              type="radio"
              value="APP_MANAGER"
            ></input>
            App Manager
          </label>
          <label>
            <input
              checked={isChecked('MARKETING')}
              name="role"
              type="radio"
              value="MARKETING"
            ></input>
            Marketing
          </label>
          <label>
            <input checked={isChecked('SALES')} name="role" type="radio" value="SALES"></input>
            Sales
          </label>
        </div>
      </div>
    </section>
  );
};
