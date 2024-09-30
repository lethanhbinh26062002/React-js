import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import AdminLayout from './pages/Layouts/AdminLayout';
import Dashboard from './pages/Layouts/Dashboard';
import WebsiteLayout from './pages/Layouts/WebsiteLayout';
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/product">Product Page</NavLink></li>
            <li><NavLink to="/about">About Page</NavLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          {/* Layout mặc định là WebsiteLayout */}
          <Route path="/" element={<WebsiteLayout />} >
            {/* HomePage,ProductPage,AboutPage chạy trong Outlet */}
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            {/* Truy cập /admin thì index chuyển đến /admin/dashboard thông qua Navigate */}
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </div >
  )
}

export default App
