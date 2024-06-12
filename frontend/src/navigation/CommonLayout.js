import * as React from "react";
import { Outlet } from "react-router-dom";

export const CommonLayout = () => {
  return (
    <>
      <h2>Common Layout</h2>
      <Outlet />
    </>
  );
};
