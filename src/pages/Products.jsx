import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PRODUCTS = [
  { id: 'dukantracker', name: 'DukanTracker', subtitle: 'with POS',          tagline: 'Complete Retail Management',    icon: '🛒', gradient: 'from-anchor-600 to-anchor-900', glow: '#5a6aff', status: 'live',   href: '/products/dukantracker',
    desc: 'DukanTracker with POS is your all-in-one retail solution. Manage inventory, process sales, track customers, and analyze performance — from a single dashboard.',
    features: ['Point of Sale (POS)','Inventory Management','Sales Analytics','Customer CRM','Multi-branch Support','Receipt Printing','Barcode Scanner','Daily Reports'], tags: ['Retail','POS','Inventory','Analytics'] },
  { id: 'ai',          name: 'anCoder AI',   subtitle: 'Developer Assistant', tagline: 'Build Faster with AI',          icon: '🤖', gradient: 'from-teal-700 to-cyan-900',     glow: '#00f5c4', status: 'coming', href: '#',
    desc: 'Your AI-powered coding companion. Generate, review, and debug code with intelligence. Supports 50+ languages, framework-aware completions, and automated PR reviews.',
    features: ['Code Generation','PR Reviews','Bug Detection','Refactoring','Documentation','Test Generation','Multi-language','IDE Plugins'], tags: ['AI','Dev Tools','Code','Automation'] },
  { id: 'hosting',     name: 'anHosting',    subtitle: 'Cloud Infrastructure', tagline: 'Deploy at the Speed of Thought', icon: '☁️', gradient: 'from-violet-700 to-purple-900', glow: '#a78bfa', status: 'coming', href: '#',
    desc: 'One-click deployments, auto-scaling infrastructure, global CDN, and edge computing. Go from code to production in seconds with zero configuration.',
    features: ['One-click Deploy','Auto-scaling','Global CDN','Edge Functions','SSL Certificates','Custom Domains','Database Hosting','99.99% Uptime'], tags: ['Cloud','CDN','Deploy','Infrastructure'] },
  { id: 'mail',        name: 'anMail',       subtitle: 'Business Email',       tagline: 'Professional Email Reinvented', icon: '✉️', gradient: 'from-orange-700 to-red-900',    glow: '#fb923c', status: 'coming', href: '#',
    desc: 'Professional email built for modern teams. Smart filtering, powerful search, thread management, and collaboration tools that adapt to how your team actually works.',
    features: ['Custom Domains','Smart Filters','Team Inboxes','Email Scheduling','Tracking','Templates','Encryption','Mobile Apps'], tags: ['Email','Business','Collaboration','Security'] },
]

export default function Products() {
  return (
    <div className="mesh-bg min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="tag text-anchor-400 mb-3">Products</p>
          <h1 className="font-display font-bold text-5xl mb-4" style={{ color: 'var(--text-1)' }}>The anCoder ecosystem</h1>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text-2)' }}>Four powerful products. One unified platform. Your anCoder account works across all of them.</p>
        </div>

        <div className="space-y-6">
          {PRODUCTS.map(p => (
            <div key={p.id} className={`glass shine rounded-3xl overflow-hidden transition-all duration-300 ${p.status === 'live' ? 'glass-hover' : 'opacity-70'}`}>
              <div className="flex flex-col md:flex-row">
                <div className={`bg-gradient-to-br ${p.gradient} p-10 flex items-center justify-center md:w-48 flex-shrink-0`} style={{ boxShadow: 'inset -20px 0 40px rgba(0,0,0,0.2)' }}>
                  <span className="text-6xl">{p.icon}</span>
                </div>
                <div className="p-8 flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="font-display font-bold text-2xl" style={{ color: 'var(--text-1)' }}>{p.name}</h2>
                        <span className="text-sm font-body" style={{ color: 'var(--text-3)' }}>{p.subtitle}</span>
                      </div>
                      <p className="text-anchor-400 text-sm font-mono">{p.tagline}</p>
                    </div>
                    {p.status === 'live' ? (
                      <span className="inline-flex items-center gap-1.5 tag px-3 py-1.5 rounded-full bg-neon/10 text-neon border border-neon/20">
                        <span className="neon-dot animate-pulse" />Live Now
                      </span>
                    ) : (
                      <span className="tag px-3 py-1.5 rounded-full" style={{ background: 'var(--bg-3)', color: 'var(--text-3)', border: '1px solid var(--border)' }}>Coming Soon</span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed mb-5 max-w-2xl" style={{ color: 'var(--text-2)' }}>{p.desc}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                    {p.features.map(f => (
                      <div key={f} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.glow }} />
                        <span className="text-xs" style={{ color: 'var(--text-2)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map(t => (
                        <span key={t} className="tag px-2.5 py-1 rounded-lg" style={{ background: 'var(--bg-3)', color: 'var(--text-3)' }}>{t}</span>
                      ))}
                    </div>
                    {p.status === 'live' ? (
                      <Link to={p.href} className="btn-primary !py-2.5 !px-5 !text-sm">Open {p.name} <ArrowRight size={14} /></Link>
                    ) : (
                      <button className="btn-ghost !py-2.5 !px-5 !text-sm cursor-not-allowed opacity-60">Get notified</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
