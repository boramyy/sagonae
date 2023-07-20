import { createBrowserRouter } from "react-router-dom";
import MainPage, { mainPageLoader } from "../pages/MainPage";
import ParttimerPage, { parttimerPageLoader } from "../pages/ParttimerPage";
import ParttimerDetailPage, { parttimerDetailPageLoader } from "../pages/ParttimerDetailPage";

const { REACT_APP_ENV } = process.env;
const isDev = REACT_APP_ENV === 'DEV';
const appDefaultPath = isDev ? '' : '/sagonae';

const routes = [
  {
    path: '/',
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

export const router = createBrowserRouter(routes, {
  basename: appDefaultPath,
})