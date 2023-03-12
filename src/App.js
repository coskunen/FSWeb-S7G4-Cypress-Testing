import logo from "./logo.svg";
import Form from "./components/Form";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Form />
        <img src={logo} className="App-logo" width="100px" alt="logo" />
      </header>
    </div>
  );
}

export default App;
