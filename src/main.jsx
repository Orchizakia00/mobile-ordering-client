import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainLayout from './layout/MainLayout';
import Cart from './pages/Cart';
import Home from './pages/Home';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </QueryClientProvider>
  </React.StrictMode>,
)
