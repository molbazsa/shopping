import "./App.css";

function App() {
  const title = "Üdv a rendszerben!";
  const products = 50;

  return (
    <div className="App">
      <h1>{title}</h1>
      <p>Jelenleg {products} terméket tartok számon</p>
    </div>
  );
}

export default App;
