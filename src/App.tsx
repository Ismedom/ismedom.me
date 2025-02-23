import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layouts/app-layout";
import Home from "./pages/home-page";
import Project from "./pages/project-page";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from 'aos';

export function App() {
  useEffect(() => {

    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-out',
      // delay: 50,
    });

  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          {/* <Route path="services" element={<Services />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;