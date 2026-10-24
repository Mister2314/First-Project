const gallery = [
  { src: './assets/img/Home-3-img-gallery-3.jpg', alt: 'Image 1' },
  { src: './assets/img/Home-3-img-gallery-1.jpg', alt: 'Image 2' },
  { src: './assets/img/Home-3-img-gallery-2.jpg', alt: 'Image 3' },
]

export default function SixthSection() {
  return (
    <section className="sixth-section">
      <div className="image-container">
        {gallery.map((g, i) => (
          <div data-aos="zoom-in" className="container2" key={i}>
            <img className="image-box" src={g.src} alt={g.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
