import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
