import { useState } from 'react';
import Button from './Button';

const SavePurchase = ({ purchaseData, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const savePurchase = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Asegurarse de que tenemos datos válidos
      if (!purchaseData || !purchaseData.customerName || !purchaseData.total) {
        throw new Error('Datos de compra incompletos');
      }
      
      console.log('Enviando datos a la API:', {
        customerName: purchaseData.customerName,
        total: purchaseData.total
      });
      
      const response = await fetch(`${import.meta.env.VITE_API_URL}/purchase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: purchaseData.customerName,
          total: purchaseData.total
        }),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la compra');
      }

      const data = await response.json();
      console.log('Respuesta de la API:', data);
      setSuccess(true);
      
      // Limpiar localStorage después de una compra exitosa
      localStorage.removeItem('cartItems');
      
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (err) {
      setError('Error al guardar la compra: ' + err.message);
      console.error('Error al guardar compra:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
        <p className="font-bold">¡Compra guardada con éxito!</p>
        <p>Gracias por tu compra, {purchaseData.customerName}.</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <Button 
        onClick={savePurchase} 
        className="bg-blue-600 text-white"
        disabled={loading}
      >
        {loading ? 'Guardando...' : 'Guardar Compra'}
      </Button>
    </div>
  );
};

export default SavePurchase;