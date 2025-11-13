import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/globals.css';
import Layout from './app/layout';
import HomeRoute from './app/routes/home';
import ServicesRoute from './app/routes/services';
import FleetRoute from './app/routes/fleet';
import TeamRoute from './app/routes/team';
import TestimonialsRoute from './app/routes/testimonials';
import ContactRoute from './app/routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomeRoute /> },
      { path: 'services', element: <ServicesRoute /> },
      { path: 'fleet', element: <FleetRoute /> },
      { path: 'team', element: <TeamRoute /> },
      { path: 'testimonials', element: <TestimonialsRoute /> },
      { path: 'contact', element: <ContactRoute /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
