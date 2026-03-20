import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, Check, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const PERKS = ['Access to all anCoder products', 'Single sign-on across the platform', 'Free tier with generous limits', 'Upgrade or cancel anytime']

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const strength = (() => {
    const p = form.password; if (!p) return 0
    let s = 0
    if (p.length >= 8) s++; if (/[A-Z]/.test(p)) s++; if (/[0-9]/.test(p)) s++; if (/[^A-Za-z0-9]/.test(p)) s++
    return s
  })()

  const handleSubmit = async e => {
    e.preventDefault(); setError('')
    if (!form.name || !form.email || !form.password) { setError('Please fill in all fields.'); return }
    if (form.password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    register(form); setLoading(false); navigate('/dashboard')
  }

  const strengthColors = ['bg-red-500','bg-orange-400','bg-yellow-400','bg-neon']
  const strengthLabels = ['Weak','Fair','Good','Strong']

  return (
    <div className="mesh-bg min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-anchor-500 to-anchor-700 flex items-center justify-center shadow-lg shadow-anchor-500/30">
              <span className="text-white font-display font-bold text-sm">a</span>
            </div>
            <span className="font-display font-bold text-lg" style={{ color: 'var(--text-1)' }}>an<span className="text-anchor-400">Coder</span></span>
          </Link>
          <h1 className="font-display font-bold text-3xl mb-2" style={{ color: 'var(--text-1)' }}>Create your account</h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-3)' }}>Join thousands of builders on the anCoder platform.</p>

          <div className="glass rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: 'name',     label: 'Full Name', type: 'text',     placeholder: 'Your full name',    auto: 'name' },
                { key: 'email',    label: 'Email',     type: 'email',    placeholder: 'you@example.com',   auto: 'email' },
              ].map(({ key, label, type, placeholder, auto }) => (
                <div key={key}>
                  <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-3)' }}>{label}</label>
                  <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} placeholder={placeholder} className="input-field" autoComplete={auto} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-3)' }}>Password</label>
                <div className="relative">
                  <input type={show ? 'text' : 'password'} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Min 6 characters" className="input-field pr-12" />
                  <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-3)' }}>
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {form.password && (
                  <div className="mt-2">
                    <div className="flex gap-1 mb-1">
                      {[...Array(4)].map((_,i) => (
                        <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i < strength ? strengthColors[strength-1] : 'bg-white/10'}`} />
                      ))}
                    </div>
                    <p className="text-xs" style={{ color: 'var(--text-3)' }}>{strengthLabels[strength-1] || ''}</p>
                  </div>
                )}
              </div>
              {error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle size={14} />{error}
                </div>
              )}
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
                {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Create account <ArrowRight size={16} /></>}
              </button>
              <p className="text-xs text-center" style={{ color: 'var(--text-3)' }}>
                By registering, you agree to our <a href="#" className="text-anchor-400 hover:underline">Terms</a> and <a href="#" className="text-anchor-400 hover:underline">Privacy Policy</a>.
              </p>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm" style={{ color: 'var(--text-3)' }}>
                Already have an account?{' '}
                <Link to="/login" className="text-anchor-400 hover:text-anchor-300 font-semibold transition-colors">Sign in</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block pt-24">
          <div className="glass rounded-3xl p-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-anchor-500 to-neon/50 flex items-center justify-center text-2xl mb-6 shadow-lg shadow-anchor-500/30">🚀</div>
            <h3 className="font-display font-bold text-2xl mb-3" style={{ color: 'var(--text-1)' }}>One account.<br />Every product.</h3>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--text-2)' }}>Your anCoder account is your passport to the entire ecosystem. Access any product without a separate login — ever.</p>
            <ul className="space-y-3">
              {PERKS.map(perk => (
                <li key={perk} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,245,196,0.15)', border: '1px solid rgba(0,245,196,0.3)' }}>
                    <Check size={11} className="text-neon" />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-2)' }}>{perk}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 flex items-center gap-3" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex -space-x-1.5">
                {['#5a6aff','#00f5c4','#a78bfa'].map((c,i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white" style={{ background: c, borderColor: 'var(--bg-2)' }}>{String.fromCharCode(65+i)}</div>
                ))}
              </div>
              <p className="text-xs" style={{ color: 'var(--text-3)' }}><strong style={{ color: 'var(--text-1)' }}>10,000+</strong> developers already building</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
