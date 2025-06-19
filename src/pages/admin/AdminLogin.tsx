import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_PASSWORD = 'Rg86890911..'; 

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_logged', 'true');
      navigate('/admin/surveys');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-900">
      <form onSubmit={handleLogin} className="bg-dark-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Acceso Admin</h1>
        <input
          type="password"
          placeholder="Contraseña de administrador"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-dark-700 border border-dark-600 text-white focus:ring-primary-500 focus:border-primary-500"
        />
        {error && <div className="text-red-400 mb-4 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded transition-colors"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
} 