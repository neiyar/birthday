import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));

export default function App() {
  return (
    <Suspense fallback={<div className="loading">Loading your surprise...</div>}>
      <Home />
    </Suspense>
  );
}
