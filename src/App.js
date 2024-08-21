import "./App.css";
import Logo from "./minimal-markets-logo.svg";
import axios from "axios";
import { useState } from "react";

function App() {
  const [stockName, setStockName] = useState("");

  const findStocks = () => {
    if (stockName.length <= 2) {
      console.log("enter a stock name that is greater than 2 letters");
    } else if (stockName.length >= 2) {
      axios
        .get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockName}&apikey=${process.env.REACT_APP_STOCK_API_KEY}`
        )
        .then((response) => {
          console.log(response.data);
        });
    }
  };
  return (
    <div className="Main-container">
      <div className="Navbar-container">
        <nav className="Navbar">
          <div className="brand">
            <img className="Logo" src={Logo} alt="Minimal Markets Logo" />
            <h1>Minimal Markets</h1>
          </div>
          <div className="account">
            <img
              className="profile"
              src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/what-are-different-types-of-stocks.jpg.optimal.jpg"
              alt="User Profile Picture"
            />
          </div>
        </nav>
      </div>
      <div className="Wrapper">
        <div className="Stock-search-container">
          <div className="Stock-search">
            <input
              type="text"
              onChange={(event) => setStockName(event.target.value)}
              placeholder="What's on your mind?"
              className="Stock-search-input"
            />
            <button onClick={findStocks} className="Stock-search-btn">
              Find
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
