import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
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
    </>
  );
};
