import React, { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  return (
    <BrowserRouter>
      <div className="h-screen w-[1536px] bg-background bg-center bg-cover">
        <div className="h-full w-full bg-black/[0.7]">
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Login />} />
            <Route path="/banner" element={<Banner />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
