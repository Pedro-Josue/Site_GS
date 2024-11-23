import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Cadastrar from './routes/Cadastrar.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Sobre from './routes/Sobre.jsx';
import Solucao from './routes/Solucao.jsx';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    // Elementos PAI
    path: '/', 
    element: <App />, 
    errorElement: <Error />,

    // Elemento Filho
    children: [
      { path: '/', element: <Home /> },
      { path: '/cadastrar', element: <Cadastrar /> },
      { path: '/login', element: <Login /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/solucao', element: <Solucao /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
