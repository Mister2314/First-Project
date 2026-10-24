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

export default function ThirdSection() {
  return (
    <section className="Third-section">
      {products.map((p, i) => (
        <div className="box" key={i} data-aos={i === 0 ? undefined : 'zoom-out'}>
          <div data-aos="zoom-out" className="Box-container">
            <img src={p.img} alt="" />
          </div>
          <h1 data-aos="fade-right">{p.title}</h1>
          {p.deleted ? (
            <div data-aos="fade-right" style={{ display: 'flex' }}>
              <del className="deleted-text">{p.deleted}</del>
              <span
                style={{
                  color: '#83BE6E',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  marginLeft: 10,
                }}
              >
                {p.price}
              </span>
            </div>
          ) : (
            <p data-aos="fade-right">{p.price}</p>
          )}
          <button>Add to cart</button>
        </div>
      ))}
    </section>
  )
}
