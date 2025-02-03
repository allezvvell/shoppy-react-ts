import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from './components/layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const CategoryRedirect = lazy(
  () => import('./pages/Category/CategoryRedirect')
);
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="loading...">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<CategoryRedirect />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
