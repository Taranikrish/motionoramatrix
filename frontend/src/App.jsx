import { Routes, Route } from 'react-router-dom'
import { AdminProvider } from './contexts/AdminContext.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/contact.jsx'
import SeeMore from './pages/SeeMore.jsx'
import SeeMoreLogos from './pages/SeeMoreLogos.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AddVideo from './pages/AddVideo.jsx'
import AddLogo from './pages/AddLogo.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  return (
    <AdminProvider>
      <div className='h-screen w-screen bg-jet-black '>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/see-more/:type" element={<SeeMore />} />
          <Route path="/see-more/logos" element={<ProtectedRoute><SeeMoreLogos /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/add-video" element={<ProtectedRoute><AddVideo /></ProtectedRoute>} />
          <Route path="/add-logo" element={<ProtectedRoute><AddLogo /></ProtectedRoute>} />
        </Routes>
      </div>
    </AdminProvider>
  )
}

export default App
