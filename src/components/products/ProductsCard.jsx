"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart-store";

const ProductsCard = ({ product }) => {
  const { addProduct } = useCartStore();

  return (
    <Card className="flex flex-col justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-4">
        {/* Imagen con espacio reservado */}
        <div className="relative w-full h-48 rounded-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Título del producto */}
        <CardTitle className="text-lg font-semibold text-white mt-4 line-clamp-2">
          {product.title}
        </CardTitle>

        {/* Categoría */}
        <CardDescription className="text-sm text-violet-200 italic">
          {product.category}
        </CardDescription>
      </CardHeader>

      {/* Precio */}
      <CardContent className="px-4 pb-0">
        <p className="text-xl font-bold text-green-400">${product.price}</p>
      </CardContent>

      {/* Acciones */}
      <CardFooter className="flex flex-col gap-2 p-4">
        <Link
          href={`/products/${product._id}`}
          className="w-full text-center py-2 rounded-md bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
        >
          Ver Detalle
        </Link>
        <button
          onClick={() => addProduct(product)}
          className="w-full py-2 rounded-md bg-teal-600 text-white font-medium hover:bg-teal-500 transition-colors"
        >
          Añadir al carrito
        </button>
      </CardFooter>
    </Card>
  );
};


export default ProductsCard;
