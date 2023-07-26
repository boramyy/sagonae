import React, { useMemo, useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import AuthContext from './store/AuthContext.js';
import useGoogle from './hooks/useGoogle';

function App(props) {
  const [tokenClient] = useGoogle();

  const authContextValue = useMemo(() => ({
    tokenClient,
  }), [tokenClient]);

  return (  
    <AuthContext.Provider value={authContextValue}>
      <h1>Sagonae</h1>
      <Link to="tel:010-0000-0000">010-0000-0000</Link>
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
