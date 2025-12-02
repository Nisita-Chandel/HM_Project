
import React from "react";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Put your header / navbar here if you want */}
      <AppRouter />
    </div>
  );
};

export default App;
