import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X, Zap, Shield, Crown } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const PLANS = [
  {
    id: 'starter', name: 'Starter', icon: Zap, monthly: 0, yearly: 0, color: '#5a6aff', badge: null,
    desc: 'Perfect for individuals getting started', cta: 'Get started free',
    features: [
      { text: '1 workspace', on: true }, { text: 'DukanTracker (limited)', on: true },
      { text: 'Up to 100 products', on: true }, { text: '1 user', on: true },
      { text: '1GB storage', on: true }, { text: 'Community support', on: true },
      { text: 'anCoder AI access', on: false }, { text: 'Priority support', on: false },
      { text: 'Custom domain', on: false }, { text: 'Advanced analytics', on: false },
      { text: 'API access', on: false }, { text: 'SSO for teams', on: false },
    ],
  },
  {
    id: 'professional', name: 'Professional', icon: Shield, monthly: 29, yearly: 23, color: '#00f5c4', badge: 'Most Popular',
    desc: 'For growing businesses and serious builders', cta: 'Start 14-day trial',
    features: [
      { text: '5 workspaces', on: true }, { text: 'DukanTracker (full)', on: true },
      { text: 'Unlimited products', on: true }, { text: 'Up to 5 users', on: true },
      { text: '50GB storage', on: true }, { text: 'Priority email support', on: true },
      { text: 'anCoder AI access', on: true }, { text: 'Priority support', on: true },
      { text: 'Custom domain', on: true }, { text: 'Advanced analytics', on: true },
      { text: 'API access', on: false }, { text: 'SSO for teams', on: false },
    ],
  },
  {
    id: 'enterprise', name: 'Enterprise', icon: Crown, monthly: 99, yearly: 79, color: '#a78bfa', badge: null,
    desc: 'Unlimited power for large organizations', cta: 'Contact sales',
    features: [
      { text: 'Unlimited workspaces', on: true }, { text: 'All products (full)', on: true },
      { text: 'Unlimited everything', on: true }, { text: 'Unlimited users', on: true },
      { text: '500GB+ storage', on: true }, { text: '24/7 dedicated support', on: true },
      { text: 'anCoder AI (unlimited)', on: true }, { text: 'Priority support', on: true },
      { text: 'Custom domain', on: true }, { text: 'Advanced analytics', on: true },
      { text: 'Full API access', on: true }, { text: 'SSO for teams', on: true },
    ],
  },
]

const FAQS = [
  { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade at any time. Changes take effect on your next billing cycle.' },
  { q: 'Do I need a separate account for each product?', a: "No! Your single anCoder account gives you access to all products. That's the whole point of our platform." },
  { q: 'Is there a free trial?', a: 'The Professional plan includes a 14-day free trial with no credit card required.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, PayPal, and bank transfers for enterprise clients.' },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)
  const { user } = useAuth()

  return (
    <div className="mesh-bg min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="tag text-anchor-400 mb-3">Pricing</p>
          <h1 className="font-display font-bold text-5xl mb-4" style={{ color: 'var(--text-1)' }}>Simple, transparent pricing</h1>
          <p className="max-w-xl mx-auto mb-8" style={{ color: 'var(--text-2)' }}>One account unlocks every product. Choose the plan that fits your scale.</p>
          <div className="inline-flex items-center gap-1 glass rounded-2xl p-1.5">
            {[{ label: 'Monthly', val: false }, { label: 'Yearly', val: true }].map(({ label, val }) => (
              <button key={label} onClick={() => setYearly(val)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${yearly === val ? 'bg-anchor-500 text-white shadow-lg shadow-anchor-500/30' : 'hover:text-anchor-300'}`}
                style={yearly !== val ? { color: 'var(--text-2)' } : {}}>
                {label}
                {val && <span className="tag px-2 py-0.5 rounded-full bg-neon/20 text-neon text-xs">Save 20%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {PLANS.map(plan => {
            const Icon = plan.icon
            const price = yearly ? plan.yearly : plan.monthly
            const isPro = plan.id === 'professional'
            return (
              <div key={plan.id} className={`glass shine rounded-3xl p-8 relative flex flex-col transition-all duration-300 ${isPro ? 'scale-[1.02] shadow-2xl shadow-anchor-500/10' : 'glass-hover'}`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="tag px-4 py-1.5 rounded-full bg-neon font-bold shadow-lg shadow-neon/30" style={{ color: '#0a0b14' }}>{plan.badge}</span>
                  </div>
                )}
                {isPro && <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(90,106,255,0.06), transparent)' }} />}

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}30` }}>
                      <Icon size={18} style={{ color: plan.color }} />
                    </div>
                    <p className="font-display font-bold" style={{ color: 'var(--text-1)' }}>{plan.name}</p>
                  </div>

                  <div className="mb-2">
                    <span className="font-display font-bold text-5xl" style={{ color: 'var(--text-1)' }}>${price}</span>
                    <span className="text-sm ml-1" style={{ color: 'var(--text-3)' }}>{price > 0 ? '/mo' : 'forever'}</span>
                  </div>
                  {yearly && price > 0 && <p className="text-xs text-neon mb-1 font-mono">Billed ${price * 12}/yr · Save ${(plan.monthly - price) * 12}</p>}
                  <p className="text-sm mb-6" style={{ color: 'var(--text-2)' }}>{plan.desc}</p>

                  <Link to={user ? '/dashboard' : '/register'}
                    className={`block w-full py-3 rounded-xl text-sm font-semibold text-center transition-all mb-8 ${isPro ? 'bg-anchor-500 hover:bg-anchor-400 text-white shadow-lg shadow-anchor-500/30' : 'btn-ghost text-center justify-center'}`}>
                    {plan.cta}
                  </Link>

                  <ul className="space-y-2.5">
                    {plan.features.map(({ text, on }) => (
                      <li key={text} className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${!on ? 'opacity-30' : ''}`}
                          style={on ? { background: `${plan.color}20`, border: `1px solid ${plan.color}40` } : { background: 'var(--bg-3)' }}>
                          {on ? <Check size={9} style={{ color: plan.color }} /> : <X size={9} style={{ color: 'var(--text-3)' }} />}
                        </div>
                        <span className="text-xs" style={{ color: on ? 'var(--text-2)' : 'var(--text-3)' }}>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-8 text-center" style={{ color: 'var(--text-1)' }}>Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div key={q} className="glass rounded-2xl overflow-hidden cursor-pointer" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                <div className="flex items-center justify-between p-5">
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>{q}</p>
                  <div className={`transition-transform duration-200 ${faqOpen === i ? 'rotate-45' : ''}`} style={{ color: 'var(--text-3)' }}><X size={14} /></div>
                </div>
                {faqOpen === i && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
