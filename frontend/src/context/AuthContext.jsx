import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const DEFAULT_CITIZEN = {
  name: 'Rameshwar Sharma',
  role: 'citizen',
  title: 'Citizen • Haryana',
  aadhaar: '•••• 8912',
  fullAadhaar: '5482-9901-4412',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNUJ7q9qf7o1FYO2BlPq3_5QYYS2g1mEZCjTnjczHKuXKbLovStdPX8u_PUWBqG7ZgUPAqvB5DtSAZd4YJIoZCvXcXyDVXtqrdBDXlGCwz0o_VfQXnClx1X0nAk5gBlRUxQPPX14wT8jYch8wV6Nyk2LBvtTP4PYkPbQ48qJ_T6qf32qs1Rb7eWWnJ-819BcylFlpjYQRbSWyIs_121HfqAQze1glfkP7_S7788RDXktWKl4l0C7ENvg',
  district: 'Gurugram',
  state: 'Haryana',
};

const DEFAULT_OFFICIAL = {
  name: 'Vikramaditya Rao',
  role: 'official',
  title: 'Revenue Officer • Tehsildar Court',
  serviceId: 'HR-GUR-REV-2024-098',
  department: 'Department of Revenue & Land Records',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNUJ7q9qf7o1FYO2BlPq3_5QYYS2g1mEZCjTnjczHKuXKbLovStdPX8u_PUWBqG7ZgUPAqvB5DtSAZd4YJIoZCvXcXyDVXtqrdBDXlGCwz0o_VfQXnClx1X0nAk5gBlRUxQPPX14wT8jYch8wV6Nyk2LBvtTP4PYkPbQ48qJ_T6qf32qs1Rb7eWWnJ-819BcylFlpjYQRbSWyIs_121HfqAQze1glfkP7_S7788RDXktWKl4l0C7ENvg',
  jurisdiction: 'Sohna Circle, Gurugram',
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('bhu_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const loginCitizen = (customData = {}) => {
    const userData = { ...DEFAULT_CITIZEN, ...customData };
    setUser(userData);
    localStorage.setItem('bhu_user', JSON.stringify(userData));
    return userData;
  };

  const loginOfficial = (customData = {}) => {
    const userData = { ...DEFAULT_OFFICIAL, ...customData };
    setUser(userData);
    localStorage.setItem('bhu_user', JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bhu_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, loginCitizen, loginOfficial, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
