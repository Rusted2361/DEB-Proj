import "./App.css";
import Greetings from "./components/Greetings";
import Visitor from "./components/Visitors";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center h-screen">
        <Greetings/>
        <Visitor/>
      </div>
    </div>
  );
}

export default App;
