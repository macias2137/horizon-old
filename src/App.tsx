import React from "react";
import "./App.css";
import "./styles/page2.sass";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <ProductPage sectionname="japanpage" heading="日本" />
      <ProductPage sectionname="koreapage" heading="韩国" />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
