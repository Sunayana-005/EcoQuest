export default {
  '/': async () => {
    const mod = await import('./pages/landing.jsx')
    return mod.default
  },
  '/login': async () => {
    const mod = await import('./pages/login.jsx')
    return mod.default 
  },
  '/signup': async () => {
    const mod = await import('./pages/signup.jsx')
    return mod.default 
  },
  '/canvas': async () => {
    const mod = await import('./pages/canvas.jsx')
    return mod.default 
  },
  '/recycle': async () => {
    const mod = await import('./pages/recycle.jsx')
    return mod.default
  },

  // '/signup': async () => (await import('./pages/signup.jsx')).default()
}
