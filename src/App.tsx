import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import Fallback from './components/Fallback';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import ErrorBoundary from './components/ErrorBoundry';
import { GlobalStyle, light, dark } from './styles';
import { useAppSelector, selectTheme } from './store';

const UserDetails = React.lazy(() => import('./pages/UserDetails'));
const UserList = React.lazy(() => import('./pages/UserList'));

function App() {
  const theme = useAppSelector(selectTheme);
  const currentTheme = theme === 'light' ? light : dark;

  return (
    <ThemeProvider theme={currentTheme}>
      <ErrorBoundary>
        <GlobalStyle />
        <AnimatePresence mode="wait">
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
        </AnimatePresence>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
