import "./App.css";
import Routers from "./components/roots/Rooters";
import Provider from "./components/utility/Provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;
