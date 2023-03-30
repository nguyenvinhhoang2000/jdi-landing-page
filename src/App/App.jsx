import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import Layout from 'Layout';
import LoadingPage from 'pages/LoadingPage';
import HomePage from 'pages/HomePage';

import './App.scss';

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path={LOCATIONS.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* <Route
          path={LOCATIONS.MARKETPLACE}
          element={<LayoutMarketPlace />}
        >
          <Route index element={<MarketPlacePage />} />
        </Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
