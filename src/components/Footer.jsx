import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <footer style={{ borderTop: '1px solid var(--footer-div)', marginTop: '6rem' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-anchor-500 to-anchor-700 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">a</span>
              </div>
              <span className="font-display font-bold" style={{ color: 'var(--text-1)' }}>
                an<span className="text-anchor-400">Coder</span>
              </span>
            </Link>
            <p className="text-sm max-w-xs leading-relaxed mb-6" style={{ color: 'var(--text-2)' }}>
              The unified platform powering the next generation of digital businesses. One login, infinite possibilities.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 glass flex items-center justify-center transition-all hover:border-anchor-500/30"
                  style={{ color: 'var(--text-3)' }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Platform',   links: ['Products', 'Pricing', 'Changelog', 'Status', 'Security'] },
            { title: 'Company',    links: ['About', 'Blog', 'Careers', 'Press', 'Partners'] },
            { title: 'Developers', links: ['API Docs', 'SDK', 'Open Source', 'Community', 'Support'] },
          ].map(({ title, links }) => (
            <div key={title}>
              <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'var(--text-3)' }}>{title}</p>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors" style={{ color: 'var(--text-2)' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--footer-div)' }}>
          <p className="text-xs font-mono" style={{ color: 'var(--text-3)' }}>
            © {new Date().getFullYear()} anCoder Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" className="text-xs transition-colors" style={{ color: 'var(--text-3)' }}>{t}</a>
            ))}
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
              {isDark
                ? <Moon size={13} className="text-anchor-400" />
                : <Sun size={13} style={{ color: '#f59e0b' }} />}
              <div className={`track ${isDark ? 'on' : ''}`}>
                <div className="thumb" />
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-2)' }}>
                {isDark ? 'Dark' : 'Light'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
