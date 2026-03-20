import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) { setError('Please fill in all fields.'); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    login({
      id: 'user_demo',
      name: form.email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      email: form.email,
      avatar: form.email.charAt(0).toUpperCase(),
      plan: 'starter',
    })
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <div className="mesh-bg min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-anchor-500 to-anchor-700 flex items-center justify-center shadow-lg shadow-anchor-500/30">
              <span className="text-white font-display font-bold">a</span>
            </div>
            <span className="font-display font-bold text-xl" style={{ color: 'var(--text-1)' }}>an<span className="text-anchor-400">Coder</span></span>
          </Link>
          <h1 className="font-display font-bold text-3xl mb-2" style={{ color: 'var(--text-1)' }}>Welcome back</h1>
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>Sign in to access your anCoder account</p>
        </div>

        <div className="glass rounded-3xl p-8">
          <div className="flex items-start gap-3 p-4 rounded-2xl mb-6" style={{ background: 'rgba(90,106,255,0.08)', border: '1px solid rgba(90,106,255,0.18)' }}>
            <div className="w-5 h-5 rounded-full bg-anchor-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <p className="text-xs text-anchor-300 leading-relaxed">
              Your anCoder account gives you access to <strong className="text-anchor-200">all products</strong> — DukanTracker, anCoder AI, anHosting, and more.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-3)' }}>Email</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="input-field" autoComplete="email" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-3)' }}>Password</label>
              <div className="relative">
                <input type={show ? 'text' : 'password'} value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="••••••••" className="input-field pr-12" autoComplete="current-password" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: 'var(--text-3)' }}>
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="flex justify-end mt-1">
                <a href="#" className="text-xs text-anchor-400 hover:text-anchor-300 transition-colors">Forgot password?</a>
              </div>
            </div>
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <AlertCircle size={14} />{error}
              </div>
            )}
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center mt-2 disabled:opacity-60">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Sign in <ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: 'var(--text-3)' }}>
              Don't have an account?{' '}
              <Link to="/register" className="text-anchor-400 hover:text-anchor-300 font-semibold transition-colors">Create one free</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
