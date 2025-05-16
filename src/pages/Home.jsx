import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';
import AddItem from '../components/AddItem';
import Button from '../components/Button';

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Cargar items desde localStorage al iniciar
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  // Función para obtener productos de la API
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        // Solo usamos los datos para mostrarlos en AddItem
        console.log('Productos cargados:', data.length);
      })
      .catch(e => console.error("Error al obtener productos:", e));
  }, [API_URL]);

  // Función para agregar un producto al carrito
  const handleAddToCart = (newProduct) => {
    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cartItems.findIndex(item => item.id === newProduct.id);
    
    let updatedCart;
    
    if (existingProductIndex !== -1) {
      // Si el producto ya existe, actualizar la cantidad
      updatedCart = [...cartItems];
      const existingQuantity = updatedCart[existingProductIndex].quantity || 1;
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: existingQuantity + (newProduct.quantity || 1)
      };
    } else {
      // Si es un producto nuevo, agregarlo al carrito
      // Asegurarse de que tenga la propiedad quantity
      updatedCart = [...cartItems, {
        ...newProduct,
        quantity: newProduct.quantity || 1
      }];
    }
    
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  // Función para eliminar un producto del carrito
  const handleDeleteFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Gestión de Productos</h1>
      
      <AddItem onAddToCart={handleAddToCart} />
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Productos Existentes</h2>
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ItemList items={cartItems} onDelete={handleDeleteFromCart} />
        )}
      </div>
      
      {cartItems.length > 0 && (
        <div className="mt-6">
          <Link to="/checkout">
            <Button className="bg-green-600 text-white">
              Ver Resumen de Compra
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}