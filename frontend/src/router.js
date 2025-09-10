import routes from './routes.js'
import Landing from './pages/landing.jsx'


export function initRouter() {
  window.addEventListener('popstate', renderRoute)
  document.body.addEventListener('click', e => {
    if (e.target.matches('a[data-link]')) {
      e.preventDefault()
      history.pushState(null, '', e.target.href)
      renderRoute()
    }
  })
  renderRoute()
}

async function renderRoute() {
  const loader = routes[location.pathname] || routes['/']
  // 1) load the view factory
  const viewPage = await loader()
  // 2) call it to get the page content node
  const pageNode = viewPage()
  // 3) wrap it in your Layout
  const tree = location.pathname === '/' ? Landing(pageNode) : pageNode
  // 4) replace EVERYTHING under #root
  const root = document.getElementById('root')
  root.replaceChildren(tree)
}
