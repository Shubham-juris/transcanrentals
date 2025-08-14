import Home from "./page/Home";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import AppRoutes from "./route/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
