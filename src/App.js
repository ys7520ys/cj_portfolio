import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimateRoutes from "./AnimatedRoutes";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./views/HomePage";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Header />
        <AnimateRoutes />
        <Footer />
      </Router>
    </HelmetProvider>
  )
}

export default App;

{/* <>{loading ? <LoadingScreen setLoading={setLoading} /> : 
<Router>
    <Header />
    <AnimateRoutes />
    <Footer />
</Router>
}
</> */}