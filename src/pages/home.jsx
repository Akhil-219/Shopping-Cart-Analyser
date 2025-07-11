import ItemsCard from "../components/itemscard";
import { useState, useEffect } from "react";
import "../css/Cart.css";
import "../css/home.css";
import { getAllItems, searchItems } from "../services/api";
import { useBudgetContext } from "../contexts/BudgetContext";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const {budget,setBudget}=useBudgetContext();

  useEffect(() => {
    const loadItems = async () => {
      try {
        const fetchItems = await getAllItems();
        setItems(fetchItems);
      } catch (err) {
        console.error(err);
        setError("Failed to get the Items....");
      } finally {
        setLoading(false);
      }
    };
    loadItems();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;
    try {
      const searchResults = await searchItems(searchQuery);
      setItems(searchResults);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to get the Items you are Searching for... ");
    } finally {
      setLoading(false);
    }
  };

  const handleBudget = (e) => {
    e.preventDefault();
    if(!budget || budget<=0){
        alert("Budget must be greater than zero")
    }
    else{
        alert(`budget set to ${budget}`)
    }
  };
  return (
    <div className="home-page">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search for items..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="budget-info">
        <input
          type="number"
          placeholder="Enter your budget...."
          className="enter-input"
          value={budget}
          onChange={(e)=>setBudget(e.target.value)}
        ></input>
        <button type="submit" className="enter-button" onClick={handleBudget}>
          Enter
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading..</div>
      ) : (
        <div className="items-grid">
          {items.length === 0 ? (
            <p className="cart-empty">No products were found with that name</p>
          ) : (
            items.map((item) => <ItemsCard key={item.id} item={item} />)
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
