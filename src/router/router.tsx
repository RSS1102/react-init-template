import { createBrowserRouter } from 'react-router-dom';
import Lazyload from './config/LazyLoad';
import React from 'react';
import PageNotFound from '@/router/config/PageNotFound';

// 官方文档：https://reactrouter.com/en/main/routers/router-provider
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/home',
        element: Lazyload(React.lazy(() => import('@/pages/home/Home'))),
      },
      {
        path: '/error',
        element: Lazyload(React.lazy(() => import('@/pages/errorElement/ErrorElement'))),
      },
      {
        path: '/user',
        element: Lazyload(React.lazy(() => import('@/pages/user/User'))),
      },
      {
        path: '/redux',
        element: Lazyload(React.lazy(() => import('@/pages/redux/Redux'))),
      },
      {
        path: '/login',
        element: Lazyload(React.lazy(() => import('@/pages/login/Login'))),
      },
    ],
  },
]);
export default router;
