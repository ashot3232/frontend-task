import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Layout from './components/Layout';
import Fallback from './components/Fallback';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ErrorBoundary from './components/ErrorBoundry';

const UserDetails = React.lazy(() => import('./pages/UserDetails'));
const UserList = React.lazy(() => import('./pages/UserList'));

const GlobalStyle = createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;
     font-family: 'Open Sans', sans-serif; 
  }
`;

function App() {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="users"
            element={
              <React.Suspense fallback={<Fallback />}>
                <UserList />
              </React.Suspense>
            }
          />
          <Route
            path="users/:id"
            element={
              <React.Suspense fallback={<Fallback />}>
                <UserDetails />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
