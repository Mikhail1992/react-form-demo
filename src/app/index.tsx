import React from "react";

const HomeComponent = React.lazy(() => import("../pages/Home"));

function App() {
  return <HomeComponent />;
}

export default App;
