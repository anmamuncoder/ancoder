import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const s = localStorage.getItem('ancoder_user')
      if (s) setUser(JSON.parse(s))
    } catch {}
    setLoading(false)
  }, [])

  const login = (data) => {
    const u = { ...data, loginTime: Date.now() }
    setUser(u)
    localStorage.setItem('ancoder_user', JSON.stringify(u))
  }

  const register = ({ name, email }) => {
    const u = {
      id: `ac_${Date.now()}`,
      name,
      email,
      avatar: name.charAt(0).toUpperCase(),
      plan: 'free',
      loginTime: Date.now(),
    }
    setUser(u)
    localStorage.setItem('ancoder_user', JSON.stringify(u))
    return u
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ancoder_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
