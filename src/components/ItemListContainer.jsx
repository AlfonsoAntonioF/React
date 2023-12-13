import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../datos";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../services/Firebase/data";

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "items"), where("categoria", "==", categoryId))
      : collection(db, "items");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { ...data, id: doc.id };
        });
        setProductos(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    // const asyncFunc = categoryId ? getProductsByCategory : getProducts
    // asyncFunc(categoryId)
    //    .then(res => {
    //     setProductos(res)
    //    })
    //    .catch(error => {
    //     console.error(error)
    //    })
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <ItemList products={Productos} />
    </div>
  );
};

export default ItemListContainer;
