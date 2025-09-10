export function h(tag, props, ...children) {
  const el = document.createElement(tag)

  for (const [key, value] of Object.entries(props || {})) {
    if (key.startsWith('on') && typeof value === 'function') {
      el.addEventListener(key.slice(2).toLowerCase(), value)
    } else {
      el.setAttribute(key, value)
    }
  }

  children.flat().forEach(child => {
    el.append(child instanceof Node ? child : document.createTextNode(child))
  })

  return el
}

export const Fragment = (...children) => children