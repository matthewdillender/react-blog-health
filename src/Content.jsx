import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { CategoriesIndex } from "./CategoriesIndex";
import { CategoriesShow } from "./CategoriesShow";
import { Modal } from "./Modal";

export function Content() {
  const [categories, setCategories] = useState([]);

  const [isCategoriesShowVisible, setIsCategoriesShowVisible] = useState(false);

  const [currentCategory, setCurrentCategory] = useState({});

  const handleIndexCategories = () => {
    console.log("handleIndexCategories");
    axios.get("http://localhost:3000/categories.json").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  const handleShowCategory = (category) => {
    console.log("handleShowCategory", category);
    setIsCategoriesShowVisible(true);
    setCurrentCategory(category);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsCategoriesShowVisible(false);
  };

  useEffect(handleIndexCategories, []);

  return (
    <main>
      <CategoriesIndex categories={categories} onShowCategory={handleShowCategory} />
      <Modal show={isCategoriesShowVisible} onClose={handleClose}>
        <CategoriesShow category={currentCategory} />
      </Modal>
    </main>
  );
}
