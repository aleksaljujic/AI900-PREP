import { createContext, useContext, useState } from 'react';
import users from '../data/users.json';

const AuthContext = createContext(null);

const AUTH_KEY = 'ai900_auth';

function safeParse(v) {
  try { return JSON.parse(v); } catch { return null; }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => safeParse(localStorage.getItem(AUTH_KEY)));

  const login = (username, password) => {
    const found = users.find(
      (u) => u.username === username && u.password === password,
    );
    if (!found) return false;
    const userData = { id: found.id, username: found.username };
    localStorage.setItem(AUTH_KEY, JSON.stringify(userData));
    setUser(userData);
    return true;
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
