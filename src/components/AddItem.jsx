import { useState, useEffect } from 'react';
import Button from './Button';

const AddItem = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
      if (!response.ok) {
        throw new Error('Error al obtener productos');
      }
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar productos: ' + err.message);
      console.error("Error al obtener productos:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedProduct) return;
    
    // Encuentra el producto seleccionado en la lista de productos
    const productToAdd = products.find(p => p.id === parseInt(selectedProduct));
    if (productToAdd) {
      // Añadimos el producto con la cantidad seleccionada
      onAddToCart({
        ...productToAdd,
        quantity: quantity
      });
      setSelectedProduct('');
      setQuantity(1); // Reset de la cantidad después de añadir
    }
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-700">
          Seleccionar Producto
        </label>
        <select
          id="product"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md"
          required
        >
          <option value="">-- Selecciona un producto --</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Cantidad
        </label>
        <div className="flex items-center mt-1">
          <button 
            type="button" 
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100"
          >
            -
          </button>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center border-t border-b border-gray-300 py-1"
          />
          <button 
            type="button" 
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="bg-blue-500 text-white"
        disabled={!selectedProduct}
      >
        Agregar al Carrito
      </Button>
    </form>
  );
};

export default AddItem;