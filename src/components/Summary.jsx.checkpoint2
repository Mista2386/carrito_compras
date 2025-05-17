import { useState } from 'react';
import Button from './Button';

const Summary = ({ items, onPurchase }) => {
  const [customerName, setCustomerName] = useState('');
  
  // Calcular el total de la compra considerando las cantidades
  const total = items.reduce((sum, item) => {
    const itemQuantity = item.quantity || 1;
    return sum + (parseFloat(item.price) * itemQuantity);
  }, 0).toFixed(2);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!customerName.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }
    
    onPurchase({
      customerName: customerName.trim(),
      total: parseFloat(total)
    });
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Resumen de tu Compra</h2>
      
      {items.length === 0 ? (
        <p className="text-gray-500">No hay productos en tu carrito</p>
      ) : (
        <>
          <div className="border-t border-b py-2 mb-4">
            <h3 className="font-medium mb-2">Productos:</h3>
            <ul className="space-y-2">
              {items.map((item) => {
                const itemQuantity = item.quantity || 1;
                const itemTotal = parseFloat(item.price) * itemQuantity;
                
                return (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {item.name} {itemQuantity > 1 ? `(x${itemQuantity})` : ''}
                    </span>
                    <span>${itemTotal.toFixed(2)}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          
          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                Nombre del Cliente
              </label>
              <input
                type="text"
                id="customerName"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-green-600 text-white"
              disabled={items.length === 0}
            >
              Finalizar Compra
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default Summary;