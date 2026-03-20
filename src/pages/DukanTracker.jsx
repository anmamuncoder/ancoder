import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingCart, Package, BarChart3, Users, Printer, Tag, TrendingUp, Shield, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const FEATURES = [
  { icon: ShoppingCart, title: 'Point of Sale',      desc: 'Fast checkout with barcode scanning, multiple payment methods, and instant receipt generation.', color: '#5a6aff' },
  { icon: Package,      title: 'Inventory Tracking', desc: 'Real-time stock levels, low-stock alerts, and automatic reorder suggestions.',                   color: '#00f5c4' },
  { icon: BarChart3,    title: 'Sales Analytics',    desc: 'Daily, weekly, monthly reports with charts, trends, and profit margin analysis.',                color: '#a78bfa' },
  { icon: Users,        title: 'Customer CRM',       desc: 'Track customer purchase history, loyalty points, and contact management.',                       color: '#fb923c' },
  { icon: Printer,      title: 'Receipt Printing',   desc: 'Thermal printer support with custom branding and digital receipt via email/SMS.',                color: '#f472b6' },
  { icon: Tag,          title: 'Product Management', desc: 'Categories, variants, SKUs, bulk import/export, and image uploads.',                            color: '#34d399' },
  { icon: TrendingUp,   title: 'Business Reports',   desc: 'P&L statements, tax reports, and custom date-range analytics.',                                  color: '#fbbf24' },
  { icon: Shield,       title: 'Multi-branch',       desc: 'Manage multiple store locations from a single dashboard with role-based access.',                color: '#60a5fa' },
]

const TABS = [
  { label: 'POS Terminal', color: 'from-anchor-600 to-anchor-900', icon: '🛒' },
  { label: 'Inventory',    color: 'from-teal-700 to-cyan-900',     icon: '📦' },
  { label: 'Analytics',   color: 'from-violet-700 to-purple-900', icon: '📊' },
]

export default function DukanTracker() {
  const { user } = useAuth()
  const [tab, setTab] = useState(0)

  return (
    <div className="mesh-bg min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 tag px-3 py-1 rounded-full bg-neon/10 text-neon border border-neon/20">
              <span className="neon-dot animate-pulse" />Live Product
            </span>
            <span style={{ color: 'var(--text-3)' }} className="text-xs">/</span>
            <span className="tag text-anchor-400">DukanTracker with POS</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-tight mb-5">
                <span className="gradient-text">Dukan</span>
                <br /><span style={{ color: 'var(--text-1)' }}>Tracker</span>
                <span className="text-anchor-400 text-3xl block mt-1 font-body font-normal">with POS</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-2)' }}>
                The complete retail management platform. Handle sales, inventory, customers, and analytics from one beautiful interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to={user ? '/dashboard' : '/register'} className="btn-primary shadow-lg shadow-anchor-500/30">
                  {user ? 'Open DukanTracker' : 'Get started free'} <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="btn-ghost">View pricing</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['No credit card required', 'Free tier available', 'Setup in 5 minutes'].map(t => (
                  <span key={t} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-3)' }}>
                    <CheckCircle size={12} className="text-neon" />{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-3xl overflow-hidden">
                <div className="flex" style={{ borderBottom: '1px solid var(--border)' }}>
                  {TABS.map((t, i) => (
                    <button key={t.label} onClick={() => setTab(i)}
                      className={`flex-1 px-3 py-3 text-xs font-mono transition-all ${tab === i ? 'text-anchor-300 border-b-2 border-anchor-500' : ''}`}
                      style={tab !== i ? { color: 'var(--text-3)' } : {}}>
                      {t.label}
                    </button>
                  ))}
                </div>
                <div className={`bg-gradient-to-br ${TABS[tab].color} h-64 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-6xl mb-3">{TABS[tab].icon}</div>
                    <p className="text-white/50 text-sm font-mono">{TABS[tab].label} Preview</p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2.5" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>DukanTracker v2.0</span>
                  <span className="flex items-center gap-1 tag text-neon"><span className="neon-dot animate-pulse" />Operational</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 glass rounded-2xl px-4 py-2.5 shadow-xl">
                <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>Inventory synced</p>
                <p className="text-sm font-bold" style={{ color: 'var(--text-1)' }}>1,247 products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="tag text-anchor-400 mb-3">Features</p>
            <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--text-1)' }}>Everything your shop needs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass shine rounded-2xl p-6 glass-hover">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-2" style={{ color: 'var(--text-1)' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-3)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12">
        <div className="max-w-2xl mx-auto glass rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(90,106,255,0.12), transparent)' }} />
          <div className="relative">
            <div className="text-4xl mb-4">🛒</div>
            <h2 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--text-1)' }}>Ready to run your shop smarter?</h2>
            <p className="text-sm mb-6" style={{ color: 'var(--text-2)' }}>Join hundreds of retailers already using DukanTracker.</p>
            <Link to={user ? '/dashboard' : '/register'} className="btn-primary">
              {user ? 'Open DukanTracker' : 'Start free'} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
