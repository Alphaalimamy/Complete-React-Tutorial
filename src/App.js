import "./App.css";

function App() {
  const title = "Welcome to Simple Code Technologies";

  const details = {
    students: 50,
    address: "Freetown",
    founder: "Alpha Alimamy Kamara",
  };
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>The Institution has {details.students} students</p>
        <p>Address: {details.address}</p>
        <p>Founder: {details.founder}</p>
      </div>
    </div>
  );
}

export default App;
