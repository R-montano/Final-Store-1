"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Separator } from "../ui/separator";
import Image from "next/image";

const ShoppingCart = () => {
  const {
    items,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();

  console.log("Items en carrito:", items);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex items-center gap-2 px-2 py-2 rounded hover:bg-teal-100 hover:text-black transition w-full text-left text-violet-700 font-semibold">
          <ShoppingBasket className="text-teal-600" />
          <span>Mi Carrito</span>
        </button>
      </SheetTrigger>

      <SheetContent className="w-[400px] sm:w-[540px] text-black p-4">
        <div className="flex flex-col h-full">
          <SheetHeader>
            <SheetTitle>🛒 Mi Carrito de compras</SheetTitle>
          </SheetHeader>

          {/* LISTA DE PRODUCTOS con scroll */}
          <ul className="space-y-4 mt-4 overflow-y-auto pr-2 flex-1">
            {items.map((item) => (
              <li
                key={item.id}
                className="bg-white/10 p-4 rounded-md shadow flex gap-4 items-start"
              >
                <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <p className="text-black font-semibold">{item.title}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-green-400 text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrementQuantity(item._id)}
                        className="bg-slate-500 px-2 text-white rounded"
                      >
                        -
                      </button>
                      <span className="bg-teal-600 text-white px-3 py-1 rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementQuantity(item._id)}
                        className="bg-slate-500 px-2 text-white rounded"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeProduct(item._id)}
                        className="bg-red-600 px-2 text-white font-bold rounded"
                      >
                        x
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* SECCIÓN FIJA DE TOTALES Y BOTÓN */}
          <div className="mt-4">
            <Separator className="mb-4" />
            <div className="bg-gray-100 p-4 rounded-md shadow space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>Total productos:</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <div className="flex justify-between text-base text-black font-semibold">
                <span>Total a pagar:</span>
                <span className="text-green-600 text-lg font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-semibold">
              Finalizar compra
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
