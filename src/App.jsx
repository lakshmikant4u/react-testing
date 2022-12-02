import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">Books App</header>
      <section>Test Content</section>
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
