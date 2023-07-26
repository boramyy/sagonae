import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage, { loginPageLoader } from "../pages/LoginPage";
import MainPage, { mainPageLoader } from "../pages/MainPage";
import ParttimerPage, { parttimerPageLoader } from "../pages/ParttimerPage";
import ParttimerDetailPage, { parttimerDetailPageLoader } from "../pages/ParttimerDetailPage";
import { ENV } from "../data/constants";

const appDefaultPath = ENV.IS_DEV ? '' : '/sagonae';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
        loader: loginPageLoader,
      },
      {
        path: '',
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: '/parttimers',
        element: <ParttimerPage />,
        loader: parttimerPageLoader,
        children: [
          {
            path: ':parttimerId',
            element: <ParttimerDetailPage />,
            loader: parttimerDetailPageLoader,
          }
        ]
      },
    ]
  },
]

export const router = createBrowserRouter(routes, {
  basename: appDefaultPath,
})