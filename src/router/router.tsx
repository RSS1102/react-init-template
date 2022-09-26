import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import Lazyload from "./config/LazyLoad";
import React from "react";
// 官方文档：https://reactrouter.com/en/main/routers/router-provider
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }, {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/error",
        element: Lazyload(React.lazy(() => import('@/pages/errorElement/ErrorElement'))),
    },
    {
        path: "/user",
        element: Lazyload(React.lazy(() => import('@/pages/user/User'))),
    },
    {
        path: "/redux",
        element: Lazyload(React.lazy(() => import('@/pages/redux/Redux'))),
    },
    // 路由404
    {
        path: '*',
        element: Lazyload(React.lazy(() => import('@/router/config/PageNotFound'))),
    }
]);
export default router