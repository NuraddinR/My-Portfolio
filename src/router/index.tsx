import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constants/paths";
import IntroductionSection from "../pages/home";

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <IntroductionSection />,
  },
]);
