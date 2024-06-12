import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { AuthGuard, GuestGuard } from "./Guard";
import { MainLayout } from "./MainLayout";
import { CommonLayout } from "./CommonLayout";

export function Routes() {
  const loginRoutes = {
    path: "/",
    element: (
      <GuestGuard>
        <CommonLayout />
      </GuestGuard>
    ),
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  };

  const mainRoutes = {
    path: "/",
    element: (
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    ),
    children: [{ path: "/home", element: <Home /> }],
  };

  const routeResult = useRoutes([loginRoutes, mainRoutes]);

  return <div>{routeResult}</div>;
}

// ___________________________BasicRoutes_________________________________

// import React from "react";
// import { Route, Routes } from "react-router-dom";

// function BasicRoutes() {
//   return (
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//   );
// }

// export default BasicRoutes;

// <Link to="/about">About</Link>
