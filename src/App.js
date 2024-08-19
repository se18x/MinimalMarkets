import "./App.css";
import Logo from "./minimal-markets-logo.svg";

function App() {
  const findStocks = () => {
    console.log("hello");
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
