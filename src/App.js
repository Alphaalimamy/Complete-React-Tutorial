import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Home Component */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
