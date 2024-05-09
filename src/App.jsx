import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { CategoriesIndex } from "./CategoriesIndex";
import { CategoryPage } from "./CategoryPage";

function App() {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
          {" "}
          {/* Use <Routes> instead of <Switch> */}
          <Route path="/" element={<Content />} /> {/* Use the "element" prop instead of wrapping component */}
          <Route path="/category/:id" element={<CategoryPage />} />{" "}
          {/* Use the "element" prop instead of wrapping component */}
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
