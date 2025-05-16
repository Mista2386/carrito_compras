import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Lista de Compras</h1>
          </div>
        </header>
        
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-200 p-4 mt-auto">
          <div className="container mx-auto text-center text-gray-600">
            Aplicación de Lista de Compras - {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;