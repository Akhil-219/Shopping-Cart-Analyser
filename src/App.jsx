import "./css/App.css";
import Home from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import NavBar from "./components/Navbar.jsx";
import { ItemProvider } from "./contexts/CartContext.jsx";

function App() {
  return (
    <ItemProvider>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </ItemProvider>
  );
}

export default App;
