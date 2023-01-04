import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Homerecipes from "./pages/Homerecipes";
import Blogs from "./pages/Blogs";
// import Aboutus from "./pages/Aboutus";
// import Contactpage from "./pages/Contactpage";
import BlogDetails from "./pages/BlogDetails";
import { Blog, Tryrecipes, Homerecipedata } from "./data";

function App() {
  return (
    <div className="App  pt-20 sm:pt-28 px-4 sm:px-10  font-inter overflow-hidden ">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recipes/:recipename"
            element={<Recipes data={Tryrecipes} />}
          />
          <Route
            path="/homerecipes/:recipename"
            element={<Homerecipes home={Homerecipedata} />}
          />
           <Route path="/blogs" element={<Blogs blog={Blog} />} />
          <Route
            path="/blogdetails/:blogtite"
            element={<BlogDetails blog={Blog} />}
          />
          {/*
          <Route path="/contactpage" element={<Contactpage />} />
          <Route path="/aboutus" element={<Aboutus />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
