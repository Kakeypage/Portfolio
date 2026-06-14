import { createBrowserRouter } from "react-router";
import { HomePage } from "./App";
import PortfolioPage from "./components/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/portfolio",
    Component: PortfolioPage,
  },
]);
