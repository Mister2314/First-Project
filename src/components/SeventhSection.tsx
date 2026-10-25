const features = ['Free 2-day shipping', '2-year warranty', '30-day returns', 'Secure checkout']

export default function SeventhSection() {
  return (
    <section className="seventh-section">
      <div className="left-box2">
        <h2 data-aos="fade-up">Summary of new product characteristics</h2>
        <p data-aos="fade-up">
          Every product we stock is tested in-house before it reaches the shelf — laptops, audio, wearables and the
          accessories that go with them.
        </p>
        <div className="texts">
          {features.map((f, i) => (
            <div className="text2" key={i}>
              <img data-aos="fade-up" src="./assets/img/icon.png" alt="" aria-hidden="true" width="24px" height="24px" />
              <span data-aos="fade-up">{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-box2">
        <img data-aos="zoom-out" src="./assets/img/home-3-imge-1.jpg" width="600px" height="550px" alt="Customer unboxing a laptop at a Wade store counter" />
      </div>
    </section>
  )
}
