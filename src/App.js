import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Reviews from "./pages/Reviews";
import './style/style.css';
function App() {
  return (
    <div className="container">
        <Header />
        <Home />
        <About />
        <Ingredients />
        <Menu />
        <Reviews />
        <Reservations />
        <Footer />
    </div>
  );
}

export default App;
