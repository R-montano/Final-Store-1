import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  // Estado inicial
  items: [],

  //-- ACCIONES
  addProduct: (product) => {
    const { items } = get();
    const existingIndex = items.findIndex((item) => item._id === product._id);

    if (existingIndex !== -1) {
      // Si el producto ya existe, incrementamos la cantidad
      const updatedItems = [...items];
      updatedItems[existingIndex].quantity += 1;
      set({ items: updatedItems });
    } else {
      // Si es nuevo, lo agregamos con quantity = 1
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },

  removeProduct: (_id) => {
    set((state) => ({
      items: state.items.filter((item) => item._id !== _id),
    }));
  },

  incrementQuantity: (_id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decrementQuantity: (_id) => {
    const { items } = get();
    const updatedItems = items
      .map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // eliminamos si cantidad es 0
    set({ items: updatedItems });
  },

  //-- SELECTORES (estado derivado)
  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
