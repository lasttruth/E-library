import Nav from "./components/nav";
import Landing from "./components/landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Landing/>
      <Highlights/>
      <Featured/>
      <Discounted/>
      <Explore/>
      <Footer/>
    </div>
  );
}

export default App;
