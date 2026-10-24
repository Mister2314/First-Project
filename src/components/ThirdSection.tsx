import { useState } from 'react'

const products = [
  {
    img: './assets/img/Product-img-1.jpg',
    title: 'Urban Pro Beats',
    deleted: '$120.00',
    price: '$99.00',
  },
  { img: './assets/img/Product-img-2.jpg', title: 'White Headset', price: '$120.00' },
  { img: './assets/img/Product-img-3.jpg', title: 'Perfect Sound', price: '$120.00' },
  { img: './assets/img/Product-img-4.jpg', title: 'Wireless Headphones', price: '$120.00' },
]

function ProductCard({ p, first }: { p: (typeof products)[number]; first: boolean }) {
  const [added, setAdded] = useState(false)

  const addToCart = () => {
    window.dispatchEvent(new CustomEvent('wade:add-to-cart'))
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="box" id={first ? 'products' : undefined}>
      <div data-aos="zoom-out" className="Box-container">
        <img src={p.img} alt={p.title} />
      </div>
      <h2 data-aos="fade-up">{p.title}</h2>
      {p.deleted ? (
        <div data-aos="fade-up" className="price-row">
          <del className="deleted-text">{p.deleted}</del>
          <span className="price-text">{p.price}</span>
        </div>
      ) : (
        <p data-aos="fade-up" className="price-text">
          {p.price}
        </p>
      )}
      <button type="button" onClick={addToCart} aria-live="polite">
        {added ? 'Added ✓' : 'Add to cart'}
      </button>
    </article>
  )
}

export default function ThirdSection() {
  return (
    <section className="Third-section" aria-label="Products">
      {products.map((p, i) => (
        <ProductCard key={p.title} p={p} first={i === 0} />
      ))}
    </section>
  )
}
