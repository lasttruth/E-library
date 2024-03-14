import Nav from "./components/nav";
import Landing from "./components/landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing/>
      <Highlights/>
      <Featured/>
    </div>
  );
}

export default App;
