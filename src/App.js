import About from "./About";
import AllBlogs from "./AllBlogs";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/all_blogs" element={<AllBlogs />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
