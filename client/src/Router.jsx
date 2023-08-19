import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import EmptyPage from "./Pages/EmptyPage";

import { HOME_ROUTE, ABOUT_ROUTE } from "./Pages/routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route path={ABOUT_ROUTE} element={<AboutPage />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
