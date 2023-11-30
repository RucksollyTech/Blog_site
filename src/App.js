import About from "./About";
import AllBlogs from "./AllBlogs";
import Footer from "./Footer";
import Home from "./Home";
import NavBa from "./NavBa";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ViewBlog from "./ViewBlog";
import Profile from "./Profile";
import AllUsers from "./AllUsers";
import Login from "./Login";
import SignUp from "./SignUp";
import Faq from "./Faq";


function App() {
  return (
    <div className="App">
        <Router>
            <NavBa />
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
                <Route path="/faqs" element={<Faq />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
