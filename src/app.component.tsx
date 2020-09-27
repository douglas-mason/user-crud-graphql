import React from 'react';
import { Dashboard } from './dashboard/dashboard.component';
import { UserDetail } from './user-detail/user-detail.component';
import { useRouter } from './_shared/hooks/useRouter';

export const App = () => {
  const { location } = useRouter();
  return (
    <div>
      {location.name === 'dashboard' && <Dashboard />}
      {location.name === 'user' && <UserDetail />}
    </div>
  );
};
