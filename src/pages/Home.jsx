import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Globe, ChevronRight, Star, Users, BarChart3, Package } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const PRODUCTS = [
  { id: 'dukantracker', name: 'DukanTracker', subtitle: 'with POS', icon: '🛒', gradient: 'from-anchor-600 to-anchor-800', desc: 'Complete retail management with point-of-sale, inventory tracking, sales analytics, and customer management.', tags: ['POS', 'Inventory', 'Analytics'], status: 'live', href: '/products/dukantracker' },
  { id: 'ai',          name: 'anCoder AI',   subtitle: 'beta',     icon: '🤖', gradient: 'from-teal-600 to-cyan-800',     desc: 'AI-powered development tools, code generation, review automation, and intelligent debugging assistance.',  tags: ['AI', 'Dev Tools', 'Code'],     status: 'coming', href: '#' },
  { id: 'hosting',     name: 'anHosting',    subtitle: 'cloud',    icon: '☁️', gradient: 'from-violet-600 to-purple-800', desc: 'Scalable cloud infrastructure with one-click deployments, auto-scaling, and global CDN distribution.',     tags: ['Cloud', 'CDN', 'Deploy'],      status: 'coming', href: '#' },
  { id: 'mail',        name: 'anMail',       subtitle: 'pro',      icon: '✉️', gradient: 'from-orange-600 to-red-800',    desc: 'Professional business email with smart filters, team collaboration, and advanced security features.',    tags: ['Email', 'Business', 'Secure'], status: 'coming', href: '#' },
]

const STATS = [
  { value: '10K+', label: 'Developers',  icon: Users },
  { value: '50+',  label: 'Countries',   icon: Globe },
  { value: '99.9%',label: 'Uptime SLA',  icon: BarChart3 },
  { value: '4',    label: 'Products',    icon: Package },
]

const FEATURES = [
  { icon: Shield, title: 'Single Sign-On',   desc: 'One anCoder account unlocks every product instantly. No more juggling passwords across services.', color: '#5a6aff' },
  { icon: Zap,    title: 'Instant Access',   desc: 'Switch between products in seconds. Your session stays active across the entire anCoder ecosystem.', color: '#00f5c4' },
  { icon: Globe,  title: 'Unified Billing',  desc: 'One subscription, all products. Manage your plan, invoices, and usage from a single dashboard.',    color: '#a78bfa' },
]

export default function Home() {
  const { user } = useAuth()
  return (
    <div className="mesh-bg min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl animate-float" style={{ background: 'var(--mesh-1)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float" style={{ background: 'var(--mesh-2)', animationDelay: '-3s' }} />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-mono text-anchor-300 mb-8 border border-anchor-500/20">
            <span className="neon-dot animate-pulse" />
            DukanTracker with POS — Now Live
            <ChevronRight size={12} />
          </div>

          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] mb-6">
            <span className="gradient-text">One Platform.</span>
            <br />
            <span style={{ color: 'var(--text-1)' }}>Infinite Products.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: 'var(--text-2)' }}>
            anCoder is the unified ecosystem where your single account powers every tool you need — from POS systems to AI assistants. Login once. Build everything.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <Link to="/dashboard" className="btn-primary">Go to Dashboard <ArrowRight size={18} /></Link>
            ) : (
              <>
                <Link to="/register" className="btn-primary shadow-lg shadow-anchor-500/30">Start free today <ArrowRight size={18} /></Link>
                <Link to="/products" className="btn-ghost">Explore products</Link>
              </>
            )}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {['#5a6aff','#00f5c4','#a78bfa','#fb923c','#f472b6'].map((c,i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-surface flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                  {String.fromCharCode(65+i)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 ml-2">
              {[...Array(5)].map((_,i) => <Star key={i} size={12} fill="#fbbf24" className="text-yellow-400" />)}
            </div>
            <span className="text-sm" style={{ color: 'var(--text-3)' }}>Trusted by 10K+ developers</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div key={label} className="glass shine rounded-2xl p-6 text-center glass-hover">
              <Icon size={20} className="mx-auto mb-3 text-anchor-400" />
              <div className="font-display font-bold text-3xl mb-1" style={{ color: 'var(--text-1)' }}>{value}</div>
              <div className="text-xs font-mono uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="tag text-anchor-400 mb-3">The Ecosystem</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-1)' }}>Everything your business needs</h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>Each product is built to stand on its own — together, they're unstoppable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <Link key={product.id} to={product.status === 'live' ? product.href : '#'}
                className={`group glass shine rounded-3xl p-8 transition-all duration-300 ${product.status === 'live' ? 'glass-hover cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-2xl shadow-lg`}>{product.icon}</div>
                  {product.status === 'live' ? (
                    <span className="inline-flex items-center gap-1.5 tag px-3 py-1 rounded-full bg-neon/10 text-neon border border-neon/20">
                      <span className="neon-dot animate-pulse" />Live
                    </span>
                  ) : (
                    <span className="tag px-3 py-1 rounded-full" style={{ background: 'var(--bg-3)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>Coming Soon</span>
                  )}
                </div>
                <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--text-1)' }}>
                  {product.name}
                  <span className="font-body font-normal text-sm ml-2" style={{ color: 'var(--text-3)' }}>{product.subtitle}</span>
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>{product.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="tag px-2 py-1 rounded-lg" style={{ background: 'var(--bg-3)', color: 'var(--text-3)' }}>{tag}</span>
                    ))}
                  </div>
                  {product.status === 'live' && (
                    <span className="text-anchor-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Open <ArrowRight size={14} /></span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="tag text-anchor-400 mb-3">Why anCoder</p>
            <h2 className="font-display font-bold text-4xl mb-4" style={{ color: 'var(--text-1)' }}>One account. Every product.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="glass shine rounded-3xl p-8 glass-hover">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${color}20`, border: `1px solid ${color}30` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3" style={{ color: 'var(--text-1)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(90,106,255,0.12), transparent)' }} />
            <div className="relative">
              <h2 className="font-display font-bold text-4xl mb-4" style={{ color: 'var(--text-1)' }}>Ready to build with anCoder?</h2>
              <p className="mb-8 max-w-md mx-auto" style={{ color: 'var(--text-2)' }}>Join thousands of developers and businesses already on the platform. Free to start, scale as you grow.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to={user ? '/dashboard' : '/register'} className="btn-primary">{user ? 'Open Dashboard' : 'Create free account'}</Link>
                <Link to="/pricing" className="btn-ghost">View pricing</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
