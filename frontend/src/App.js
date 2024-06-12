import React from "react";
import { Routes as AdvanceRoutes } from "./navigation/Routes";
import { Provider } from "./navigation/Provider";

function App() {
  return (
    <Provider>
      <AdvanceRoutes />
    </Provider>
  );
}

export default App;
