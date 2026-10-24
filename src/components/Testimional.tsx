const testimonials = [
  {
    img: './assets/img/Testimonials-img-2.png',
    quote:
      '“Quos officia est aspernatur mo lestias debitis in nos trum itaque aesentium  ',
    quote2: 'ut exercita tinem nul la nulla culpa elit per domus reptur chain omnis sincorrupti.” ',
    name: 'Tony Callahan',
    role: 'Manager',
  },
  {
    img: './assets/img/Testimonials-img-3.png',
    quote:
      '“Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Curabitur nisi dui.” ',
    name: 'Fiona Marcl',
    role: 'Manager',
  },
  {
    img: './assets/img/Testimonials-img-1.png',
    quote:
      '“Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Curabitur nisi dui.” ',
    name: 'Crsitina Durgan',
    role: 'Founder & CEO',
  },
]

export default function Testimional() {
  return (
    <section className="testimional">
      {testimonials.map((t, i) => (
        <div data-aos="zoom-out" className="testimional-box" key={i}>
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
            <img src={t.img} alt="" />
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
