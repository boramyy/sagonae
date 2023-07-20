import { createBrowserRouter } from "react-router-dom";
import MainPage, { mainPageLoader } from "../pages/MainPage";
import ParttimerPage, { parttimerPageLoader } from "../pages/ParttimerPage";
import ParttimerDetailPage, { parttimerDetailPageLoader } from "../pages/ParttimerDetailPage";

export const router = createBrowserRouter([
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
])