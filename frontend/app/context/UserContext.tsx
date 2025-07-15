'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  email: string;
  token: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
  loading: true,
});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    try {
      const parsed = stored ? JSON.parse(stored) : null;
      if (parsed?.token && parsed?.email) {
        setUser(parsed);
      } else {
        localStorage.removeItem('user');
        setUser(null);
      }
    } catch {
      localStorage.removeItem('user');
      setUser(null);
    }
    setLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
