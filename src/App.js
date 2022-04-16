import Header from "./components/layout/Header";

import "./App.css";
import Home from "./components/Pages/Home page/Home";
import SelectedCategory from "./components/Pages/Category page/SelectedCategory";
import BlogDetails from "./components/Pages/Blog Detail/BlogDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:cat" element={<SelectedCategory />} />
          <Route path="/article/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
