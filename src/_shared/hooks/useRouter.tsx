import React from 'react';
import { createContext, useContext, useState } from 'react';

type LocationNames = 'dashboard' | 'user';

type Location = {
  name: LocationNames;
  params?: { [key: string]: any };
};

type LocationState = {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
};

const DEFAULT_LOCATION_STATE: LocationState = {
  location: { name: 'dashboard' },
  setLocation: () => {},
};

const RouterContext = createContext<LocationState>(DEFAULT_LOCATION_STATE);

export const useRouter = () => useContext(RouterContext);

export const RouterContextProvider: React.FC = ({ children }) => {
  const [location, setLocation] = useState<Location>({ name: 'dashboard' });
  return (
    <RouterContext.Provider value={{ location, setLocation }}>{children}</RouterContext.Provider>
  );
};
