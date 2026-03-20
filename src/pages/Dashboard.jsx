import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ArrowRight, ExternalLink, BarChart3, TrendingUp, Clock, ChevronRight, Zap } from 'lucide-react'

const PRODUCTS = [
  { id: 'dukantracker', name: 'DukanTracker', subtitle: 'with POS', icon: '🛒', gradient: 'from-anchor-600/40 to-anchor-800/40', desc: 'Retail POS & inventory management', status: 'live',   href: '/products/dukantracker', action: 'Open app' },
  { id: 'ai',          name: 'anCoder AI',   subtitle: 'beta',     icon: '🤖', gradient: 'from-teal-600/20 to-cyan-800/20',     desc: 'AI-powered dev assistant',       status: 'coming', href: '#',                      action: 'Notify me' },
  { id: 'hosting',     name: 'anHosting',    subtitle: 'cloud',    icon: '☁️', gradient: 'from-violet-600/20 to-purple-800/20', desc: 'Scalable cloud infrastructure',  status: 'coming', href: '#',                      action: 'Notify me' },
  { id: 'mail',        name: 'anMail',       subtitle: 'pro',      icon: '✉️', gradient: 'from-orange-600/20 to-red-800/20',    desc: 'Professional email suite',       status: 'coming', href: '#',                      action: 'Notify me' },
]

export default function Dashboard() {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="mesh-bg min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pt-8">
          <div>
            <p className="text-sm font-mono mb-1" style={{ color: 'var(--text-3)' }}>{greeting},</p>
            <h1 className="font-display font-bold text-3xl" style={{ color: 'var(--text-1)' }}>{user.name} 👋</h1>
            <p className="text-sm mt-1" style={{ color: 'var(--text-3)' }}>{user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="glass rounded-2xl px-4 py-2 flex items-center gap-2">
              <Zap size={14} className="text-anchor-400" />
              <span className="text-xs font-mono text-anchor-400 uppercase">{user.plan || 'Free'} Plan</span>
            </div>
            <Link to="/pricing" className="px-4 py-2 bg-anchor-500 hover:bg-anchor-400 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-anchor-500/30">Upgrade</Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Products Available', value: '4',      sub: '1 live now',           icon: BarChart3, color: '#5a6aff' },
            { label: 'Account Status',     value: 'Active', sub: 'Verified',             icon: TrendingUp, color: '#00f5c4' },
            { label: 'Member Since',       value: 'Today',  sub: new Date().toLocaleDateString(), icon: Clock, color: '#a78bfa' },
            { label: 'SSO Sessions',       value: '1',      sub: 'Active session',       icon: Zap, color: '#fb923c' },
          ].map(({ label, value, sub, icon: Icon, color }) => (
            <div key={label} className="glass shine rounded-2xl p-5 glass-hover">
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs font-mono uppercase tracking-wide" style={{ color: 'var(--text-3)' }}>{label}</p>
                <Icon size={14} style={{ color }} />
              </div>
              <p className="font-display font-bold text-xl" style={{ color: 'var(--text-1)' }}>{value}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-3)' }}>{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Products */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-semibold text-lg mb-4" style={{ color: 'var(--text-1)' }}>Your Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRODUCTS.map(p => (
                <div key={p.id} className={`glass shine rounded-2xl p-5 transition-all duration-300 ${p.status === 'live' ? 'glass-hover' : 'opacity-60'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} border border-anchor-500/10 flex items-center justify-center text-xl`}>{p.icon}</div>
                    {p.status === 'live' ? (
                      <span className="flex items-center gap-1 tag text-neon"><span className="neon-dot animate-pulse" />Live</span>
                    ) : (
                      <span className="tag" style={{ color: 'var(--text-3)' }}>Soon</span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-sm" style={{ color: 'var(--text-1)' }}>
                    {p.name} <span className="font-body font-normal" style={{ color: 'var(--text-3)' }}>{p.subtitle}</span>
                  </h3>
                  <p className="text-xs mt-1 mb-4" style={{ color: 'var(--text-3)' }}>{p.desc}</p>
                  <Link to={p.href} className={`flex items-center gap-1.5 text-xs font-semibold transition-all ${p.status === 'live' ? 'text-anchor-400 hover:text-anchor-300 hover:gap-2' : 'cursor-not-allowed pointer-events-none'}`} style={p.status !== 'live' ? { color: 'var(--text-3)' } : {}}>
                    {p.action} {p.status === 'live' && <ArrowRight size={12} />}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <h2 className="font-display font-semibold text-sm mb-4 flex items-center gap-2" style={{ color: 'var(--text-1)' }}>
                <Clock size={14} style={{ color: 'var(--text-3)' }} />Recent Activity
              </h2>
              <div className="space-y-3">
                {[
                  { action: 'Logged into DukanTracker', time: '2 minutes ago', icon: '🛒' },
                  { action: 'Account created', time: 'Just now', icon: '✅' },
                  { action: 'Profile verified', time: '1 minute ago', icon: '🔐' },
                ].map(({ action, time, icon }) => (
                  <div key={action} className="flex items-start gap-3">
                    <span className="text-lg">{icon}</span>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--text-2)' }}>{action}</p>
                      <p className="text-xs" style={{ color: 'var(--text-3)' }}>{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(90,106,255,0.1), transparent)' }} />
              <div className="relative">
                <p className="tag text-anchor-400 mb-2">Current Plan</p>
                <p className="font-display font-bold text-2xl capitalize" style={{ color: 'var(--text-1)' }}>{user.plan || 'Free'}</p>
                <p className="text-xs mt-1 mb-4" style={{ color: 'var(--text-3)' }}>Upgrade for unlimited access</p>
                <Link to="/pricing" className="flex items-center gap-1.5 text-xs font-semibold text-anchor-400 hover:text-anchor-300 hover:gap-2.5 transition-all">
                  View plans <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <p className="font-display font-semibold text-sm mb-3" style={{ color: 'var(--text-1)' }}>Quick Links</p>
              <div className="space-y-1">
                {['Documentation', 'API Reference', 'Community Forum', 'Support'].map(label => (
                  <a key={label} href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-all group hover:bg-anchor-500/10" style={{ color: 'var(--text-2)' }}>
                    {label}
                    <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
