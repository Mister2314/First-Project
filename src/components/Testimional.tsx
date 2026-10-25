const testimonials = [
  {
    img: './assets/img/Testimonials-img-2.png',
    quote:
      '“Ordered a laptop on Tuesday, it was on my desk Thursday morning — boxed, updated and ready to go.” ',
    quote2: 'Support even followed up a week later to make sure everything was running fine.” ',
    name: 'Tony Callahan',
    role: 'Manager',
  },
  {
    img: './assets/img/Testimonials-img-3.png',
    quote:
      '“The comparison videos sold me. Seeing the headphones side by side beat reading ten spec sheets, and the price was the best I found anywhere.” ',
    name: 'Fiona Marcl',
    role: 'Manager',
  },
  {
    img: './assets/img/Testimonials-img-1.png',
    quote:
      '“Returned a keyboard that wasn’t right for my setup — refund processed the same afternoon, no questions asked. That’s why I keep coming back.” ',
    name: 'Crsitina Durgan',
    role: 'Founder & CEO',
  },
]

export default function Testimional() {
  return (
    <section className="testimional">
      <p className="testimional-demo-note" style={{ textAlign: 'center', opacity: 0.65, fontSize: '0.85rem' }}>
        Demo content — fictional reviews
      </p>
      {testimonials.map((t, i) => (
        <div className="testimional-box" key={i}>
          <div className="stars">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <h2>
            {t.quote}
            {t.quote2 && <br />}
            {t.quote2}
          </h2>
          <div className="profile">
            <img src={t.img} alt={`Portrait of ${t.name}`} />
            <div className="profile-container">
              <h1>{t.name}</h1>
              <span>{t.role}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
