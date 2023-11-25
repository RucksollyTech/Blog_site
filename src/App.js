import About from "./About";
import AllBlogs from "./AllBlogs";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ViewBlog from "./ViewBlog";
import Profile from "./Profile";


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
                <Route path="/view_blogs" element={<ViewBlog />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
