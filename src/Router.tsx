import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import ErrorPage from "./page/ErrorPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <ScrollToTopButton />
    </>
  );
};
