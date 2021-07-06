import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      <div className="content">
        <h1>App Component</h1>
      </div>

      {/* Home Component */}
      <Home />
    </div>
  );
}

export default App;
