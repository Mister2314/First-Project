const stats = [
  { value: '4.98', label: 'Average rating of this' },
  { value: '100M+', label: 'Users surveyed say they' },
  { value: '24k', label: 'A short-hand way of' },
  { value: '140m', label: 'Users surveyed say they' },
]

export default function FifthSection() {
  return (
    <section className="fifth-section">
      <div className="container">
        {stats.map((s, i) => (
          <div data-aos="zoom-out" className="box2" key={i}>
            <span>{s.value}</span>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
