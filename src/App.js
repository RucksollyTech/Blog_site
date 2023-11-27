import About from "./About";
import AllBlogs from "./AllBlogs";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ViewBlog from "./ViewBlog";
import Profile from "./Profile";
import AllUsers from "./AllUsers";
import Login from "./Login";
import SignUp from "./SignUp";


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
                <Route path="/all_users" element={<AllUsers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign_up" element={<SignUp />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
