import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

//this is the actual value you want to access...
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //this is where I am uploading the data
  //   useEffect(() => {
  //     addCollectionAndDocuments("categories", SHOP_DATA);
  //   }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
