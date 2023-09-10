import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Fallback from './components/Fallback';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const UserDetails = React.lazy(() => import('./pages/UserDetails'));
const UserList = React.lazy(() => import('./pages/UserList'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} />
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
    </div>
  );
}

export default App;
