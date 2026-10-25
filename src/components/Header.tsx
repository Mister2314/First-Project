import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const badgeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    const onTheme = () => setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
    window.addEventListener('wade:theme-change', onTheme)
    const onAdd = () => {
      setCount((c) => c + 1)
      if (badgeRef.current) {
        gsap.fromTo(badgeRef.current, { scale: 1.5 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' })
      }
    }
    window.addEventListener('wade:add-to-cart', onAdd)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wade:theme-change', onTheme)
      window.removeEventListener('wade:add-to-cart', onAdd)
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('wade-theme', next)
    } catch {
      /* private mode: theme just won't persist */
    }
    window.dispatchEvent(new Event('wade:theme-change'))
  }

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="boxes">
        <div className="left-box">
          <a href="#main" aria-label="Wade home">
            <img src="./assets/img/Home-3-Logo.png" width="90px" height="39px" alt="Wade" />
          </a>
          <nav aria-label="Main">
            <ul>
              <li>
                <a href="#main">Home</a>
                <span className="material-symbols-outlined" aria-hidden="true">
                  expand_more
                </span>
              </li>
              <li>
                <a href="#products">Shop</a>
                <span className="material-symbols-outlined" aria-hidden="true">
                  expand_more
                </span>
              </li>
              <li>
                <a href="#features">About</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="right-box">
          <p>Call</p>
          <p className="paragraph1-1" style={{ marginRight: 20 }}>
            <a href="tel:+3225120815">(322) 512 08 15</a>
          </p>
          <button className="cart-button" aria-label={`Cart, ${count} items`}>
            <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
            <span ref={badgeRef} className="shop-items" aria-hidden="true">
              {count}
            </span>
          </button>
          <button className="quote-button">Get a Quote</button>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            aria-pressed={theme === 'light'}
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
