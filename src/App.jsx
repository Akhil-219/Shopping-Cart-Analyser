import "./css/App.css";
import Home from "./pages/home.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import NavBar from "./components/Navbar.jsx";
import { ItemProvider } from "./contexts/CartContext.jsx";
import { BudgetProvider } from "./contexts/BudgetContext.jsx";
import User from "./pages/User.jsx"
import SignUp from "./pages/Signup.jsx";

function App() {
  return (
    <BudgetProvider>
    <ItemProvider>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />}/>
            <Route path="/user/signup" element={<SignUp/>}/>
          </Routes>
        </main>
      </div>
    </ItemProvider>
    </BudgetProvider>
  );
}

export default App;
