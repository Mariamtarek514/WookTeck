import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Blog from "./Blog";

const AnimationRoute = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default AnimationRoute;
