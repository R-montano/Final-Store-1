"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductsCard from "@/components/products/ProductsCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      //console.log(response);
      setProducts(response.data.data); // ✅ Aquí sí accedes al array
    };
    fetchProducts();
  }, []);

  console.log(products);

  /* aqui se encuentra Product Gallery 🛍 */
  return (
    <div>
      <h2 className="relative pl-2.5 pt-1.5 text-2xl font-bold tracking-wide text-zinc-700 drop-shadow-md">
        Product Gallery 🛍
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-8">
        {products.map((product) => (
          <ProductsCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
