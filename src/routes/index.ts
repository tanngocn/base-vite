import { createBrowserRouter } from "react-router";
import PublicLayout from "@/components/layouts/PublicLayout";
import HomePage from "@/views/home";
import DetailPage from "@/views/detail";

const APP_URL = {
  HOME: "/",
  DETAIL: "/:id",
};

export const routers = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [
      {
        path: APP_URL.HOME,
        Component: HomePage,
      },
      {
        path: APP_URL.DETAIL,
        Component: DetailPage,
      },
    ],
  },
]);
