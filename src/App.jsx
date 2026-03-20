import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'
import Products from './pages/Products'
import DukanTracker from './pages/DukanTracker'
import About from './pages/About'

function Layout({ children, noFooter }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!noFooter && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/"                        element={<Layout><Home /></Layout>} />
            <Route path="/login"                   element={<Layout noFooter><Login /></Layout>} />
            <Route path="/register"                element={<Layout noFooter><Register /></Layout>} />
            <Route path="/dashboard"               element={<Layout><Dashboard /></Layout>} />
            <Route path="/pricing"                 element={<Layout><Pricing /></Layout>} />
            <Route path="/products"                element={<Layout><Products /></Layout>} />
            <Route path="/products/dukantracker"   element={<Layout><DukanTracker /></Layout>} />
            <Route path="/about"                   element={<Layout><About /></Layout>} />
            <Route path="*" element={
              <Layout>
                <div className="mesh-bg min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-mono text-anchor-400 text-6xl font-bold mb-4">404</p>
                    <p className="font-display text-xl mb-6" style={{ color: 'var(--text-1)' }}>Page not found</p>
                    <a href="/" className="text-anchor-400 hover:text-anchor-300 transition-colors">← Back home</a>
                  </div>
                </div>
              </Layout>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
