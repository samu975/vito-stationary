import { useState, createContext } from "react";

export const DrawerContext = createContext({});

export function DrawerProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
      {isOpen && (
        <div className="transition ease-linear duration-300 fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed bg-white right-0 w-64 h-full">
            <button onClick={toggleDrawer}>Cerrar</button>
            <div className="flex justify-center flex-wrap">
              <h1>Carrito de compras</h1>
              {items.length > 0 ? (
                <h2>Tienes {items.length} items en el carrito</h2>
              ) : (
                <h2>No tienes items en el carrito</h2>
              )}
            </div>
          </div>
        </div>
      )}
    </DrawerContext.Provider>
  );
}
