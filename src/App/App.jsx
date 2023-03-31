import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LOCATIONS } from 'constants/index';

import './App.scss';

const Layout = React.lazy(() => import('Layout'));
const LoadingPage = React.lazy(() => import('pages/LoadingPage'));
const HomePage = React.lazy(() => import('pages/HomePage'));

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
