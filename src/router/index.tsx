import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constants/paths";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
]);
