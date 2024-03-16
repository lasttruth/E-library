import Nav from "./components/nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/books" element={<Books books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
