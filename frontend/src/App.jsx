import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

// Admin Imports
import AdminLayout from './admin/components/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import AdminLogin from './admin/pages/AdminLogin';
import AdminRegister from './admin/pages/AdminRegister';
import AdminForgotPassword from './admin/pages/AdminForgotPassword';
// (Other admin pages will go here, routing them to Dashboard for now as placeholders)

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:slug" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Auth Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* Placeholder routes for UI demo */}
          <Route path="products" element={<Dashboard />} />
          <Route path="categories" element={<Dashboard />} />
          <Route path="enquiries" element={<Dashboard />} />
          <Route path="orders" element={<Dashboard />} />
          <Route path="messages" element={<Dashboard />} />
          <Route path="content" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
          <Route path="logs" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
