import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Summary from '../components/Summary';
import SavePurchase from '../components/SavePurchase';
import Button from '../components/Button';

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [purchaseData, setPurchaseData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Cargar items desde localStorage
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const handlePurchase = (data) => {
    // Guardar los datos de la compra, incluyendo el nombre del cliente
    console.log("Datos recibidos del formulario Summary:", data);
    setPurchaseData(data);
  };

  const handlePurchaseSuccess = () => {
    // Esperar un momento y redirigir al inicio
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Finalizar Compra</h1>
      
      <Summary items={cartItems} onPurchase={handlePurchase} />
      
      {purchaseData && (
        <div className="mt-6">
          <SavePurchase 
            purchaseData={purchaseData} 
            onSuccess={handlePurchaseSuccess} 
          />
        </div>
      )}
      
      <div className="mt-6">
        <Link to="/">
          <Button className="bg-gray-600 text-white">
            Volver a la Lista
          </Button>
        </Link>
      </div>
    </div>
  );
}