import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const TEAM = [
  { name: 'Alex Rahman',  role: 'CEO & Co-founder',  avatar: 'A', color: '#5a6aff' },
  { name: 'Sarah Chen',   role: 'CTO & Co-founder',  avatar: 'S', color: '#00f5c4' },
  { name: 'Omar Hassan',  role: 'Head of Product',   avatar: 'O', color: '#a78bfa' },
  { name: 'Priya Nair',   role: 'Lead Designer',     avatar: 'P', color: '#fb923c' },
]

const TIMELINE = [
  { year: '2022', title: 'Founded',       desc: 'anCoder was founded with the vision of a unified developer platform.' },
  { year: '2023', title: 'First Product', desc: 'DukanTracker launched, serving 500+ retailers in the first month.' },
  { year: '2024', title: 'Platform',      desc: 'Pivoted to full platform model with SSO and ecosystem approach.' },
  { year: '2025', title: 'Scale',         desc: 'Reached 10,000 developers across 50+ countries. Series A secured.' },
]

export default function About() {
  return (
    <div className="mesh-bg min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="tag text-anchor-400 mb-3">About anCoder</p>
          <h1 className="font-display font-bold text-5xl mb-6" style={{ color: 'var(--text-1)' }}>Building the platform<br />behind the future</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
            We believe software should be unified, not fragmented. anCoder is building the ecosystem where every tool works seamlessly together — with one identity, one account, one platform.
          </p>
        </div>

        <div className="glass rounded-3xl p-10 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(90,106,255,0.08), transparent)' }} />
          <div className="relative grid md:grid-cols-2 gap-10">
            {[
              { label: 'Our Mission', title: 'One login. Every tool.', body: "We're building the Google Workspace for the next generation — but for every type of business, from the local dukan owner to the enterprise developer team." },
              { label: 'Our Vision',  title: 'Unified by design.',   body: 'Every anCoder product is built with the platform in mind. Shared authentication, shared billing, shared data — so your tools actually talk to each other.' },
            ].map(({ label, title, body }) => (
              <div key={label}>
                <p className="tag text-anchor-400 mb-3">{label}</p>
                <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--text-1)' }}>{title}</h2>
                <p className="leading-relaxed" style={{ color: 'var(--text-2)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl mb-8 text-center" style={{ color: 'var(--text-1)' }}>Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-anchor-500/20" />
            <div className="space-y-8">
              {TIMELINE.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-6 pl-2">
                  <div className="flex-shrink-0 relative">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center z-10 relative" style={{ background: 'rgba(90,106,255,0.15)', border: '1px solid rgba(90,106,255,0.3)' }}>
                      <div className="w-2 h-2 rounded-full bg-anchor-500" />
                    </div>
                  </div>
                  <div className="glass shine rounded-2xl p-5 flex-1 glass-hover">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="tag text-anchor-400">{year}</span>
                      <h3 className="font-display font-semibold" style={{ color: 'var(--text-1)' }}>{title}</h3>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-2)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl mb-8 text-center" style={{ color: 'var(--text-1)' }}>The Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TEAM.map(({ name, role, avatar, color }) => (
              <div key={name} className="glass shine rounded-2xl p-6 text-center glass-hover">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-display font-bold text-xl mx-auto mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${color}, ${color}88)`, boxShadow: `0 8px 24px ${color}30` }}>
                  {avatar}
                </div>
                <p className="font-display font-semibold text-sm" style={{ color: 'var(--text-1)' }}>{name}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-3)' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--text-1)' }}>Join the anCoder platform</h2>
          <p className="mb-8" style={{ color: 'var(--text-2)' }}>Start free. Build fast. Scale with us.</p>
          <Link to="/register" className="btn-primary">Get started today <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  )
}
