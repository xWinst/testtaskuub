import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader, Header } from 'components';
import About from 'pages/About';

const Gallery = lazy(() => import('pages/Gallery'));
const Contacts = lazy(() => import('pages/Contacts'));
const Messages = lazy(() => import('pages/Messages'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

export const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="messages" element={<Messages />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
