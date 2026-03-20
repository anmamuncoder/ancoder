import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Menu, X, ChevronDown, Grid3X3, LogOut, Settings, User, Bell } from 'lucide-react'

const PRODUCTS = [
  { id: 'dukantracker', name: 'DukanTracker', icon: '🛒', desc: 'Retail & POS Management', href: '/products/dukantracker', soon: false },
  { id: 'ai',          name: 'anCoder AI',   icon: '🤖', desc: 'AI-powered dev tools',   href: '#', soon: true },
  { id: 'hosting',     name: 'anHosting',    icon: '☁️', desc: 'Cloud infrastructure',    href: '#', soon: true },
  { id: 'mail',        name: 'anMail',       icon: '✉️', desc: 'Business email suite',    href: '#', soon: true },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [appsOpen, setAppsOpen]     = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const appsRef    = useRef(null)
  const profileRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = (e) => {
      if (appsRef.current    && !appsRef.current.contains(e.target))    setAppsOpen(false)
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const isActive = p => location.pathname === p

  const navStyle = scrolled
    ? { background: 'var(--surface)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }
    : { background: 'transparent' }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={navStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-anchor-500 to-anchor-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-sm">a</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-neon animate-pulse-slow" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight" style={{ color: 'var(--text-1)' }}>
              an<span className="text-anchor-400">Coder</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {[['/', 'Home'], ['/products', 'Products'], ['/pricing', 'Pricing'], ['/about', 'About']].map(([to, label]) => (
              <Link key={to} to={to}
                className="px-4 py-2 rounded-lg text-sm font-body transition-all duration-200"
                style={{
                  background: isActive(to) ? 'rgba(90,106,255,0.12)' : 'transparent',
                  color: isActive(to) ? '#a4b8ff' : 'var(--text-2)',
                }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            {/* Apps grid */}
            {user && (
              <div className="relative" ref={appsRef}>
                <button onClick={() => setAppsOpen(!appsOpen)}
                  className="p-2 rounded-lg transition-all"
                  style={{ color: 'var(--text-2)' }}>
                  <Grid3X3 size={18} />
                </button>
                {appsOpen && (
                  <div className="absolute right-0 top-12 w-72 glass rounded-2xl p-3 shadow-2xl"
                    style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
                    <p className="text-xs font-mono px-2 mb-2 uppercase tracking-widest" style={{ color: 'var(--text-3)' }}>anCoder Products</p>
                    <div className="grid grid-cols-2 gap-2">
                      {PRODUCTS.map(p => (
                        <Link key={p.id} to={p.soon ? '#' : p.href}
                          onClick={() => setAppsOpen(false)}
                          className={`flex flex-col gap-1 p-3 rounded-xl transition-all duration-200 ${p.soon ? 'opacity-40 cursor-not-allowed' : ''}`}
                          style={{ '&:hover': { background: 'var(--bg-3)' } }}>
                          <span className="text-2xl">{p.icon}</span>
                          <span className="text-xs font-display font-semibold" style={{ color: 'var(--text-1)' }}>{p.name}</span>
                          <span className="text-xs" style={{ color: 'var(--text-3)' }}>{p.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Auth */}
            {user ? (
              <div className="relative" ref={profileRef}>
                <button onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 glass rounded-xl transition-all">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-anchor-500 to-neon flex items-center justify-center text-white text-xs font-bold">
                    {user.avatar || user.name?.charAt(0) || 'U'}
                  </div>
                  <span className="text-sm max-w-[80px] truncate" style={{ color: 'var(--text-2)' }}>{user.name?.split(' ')[0]}</span>
                  <ChevronDown size={14} style={{ color: 'var(--text-3)' }} />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 top-12 w-56 glass rounded-2xl p-2 shadow-2xl"
                    style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}>
                    <div className="px-3 py-2 mb-1" style={{ borderBottom: '1px solid var(--border)' }}>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>{user.name}</p>
                      <p className="text-xs truncate" style={{ color: 'var(--text-3)' }}>{user.email}</p>
                      <span className="inline-flex mt-1 tag px-2 py-0.5 rounded-full bg-anchor-500/20 text-anchor-400">
                        {user.plan || 'free'} plan
                      </span>
                    </div>
                    {[['Profile', User], ['Settings', Settings], ['Notifications', Bell]].map(([label, Icon]) => (
                      <button key={label} onClick={() => { setProfileOpen(false); navigate('/dashboard') }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all"
                        style={{ color: 'var(--text-2)' }}>
                        <Icon size={14} />{label}
                      </button>
                    ))}
                    <div style={{ borderTop: '1px solid var(--border)', marginTop: 4, paddingTop: 4 }}>
                      <button onClick={() => { logout(); setProfileOpen(false); navigate('/') }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-all">
                        <LogOut size={14} />Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-4 py-2 text-sm transition-colors" style={{ color: 'var(--text-2)' }}>Sign in</Link>
                <Link to="/register"
                  className="px-4 py-2 text-sm font-semibold bg-anchor-500 hover:bg-anchor-400 text-white rounded-xl transition-all hover:shadow-lg hover:shadow-anchor-500/30">
                  Get started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 transition-colors" style={{ color: 'var(--text-2)' }}
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="px-4 py-4 space-y-1">
            {[['/', 'Home'], ['/products', 'Products'], ['/pricing', 'Pricing'], ['/about', 'About']].map(([to, label]) => (
              <Link key={to} to={to} className="block px-3 py-2 rounded-lg text-sm transition-all"
                style={{ color: 'var(--text-2)' }}>{label}</Link>
            ))}
            <div className="pt-3 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border)' }}>
              {user ? (
                <button onClick={() => { logout(); navigate('/') }}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-400">
                  <LogOut size={14} />Sign out
                </button>
              ) : (
                <>
                  <Link to="/login" className="px-3 py-2 text-sm" style={{ color: 'var(--text-2)' }}>Sign in</Link>
                  <Link to="/register" className="px-3 py-2 text-sm text-white bg-anchor-500 rounded-xl text-center">Get started</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
