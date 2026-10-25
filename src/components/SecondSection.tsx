export default function SecondSection() {
  return (
    <section className="second-section">
      <div className="left-box1">
        <h2 data-aos="fade-right">Subscribe today and get 20% off on all goods</h2>
        <div data-aos="fade-right" className="input-container">
          <label>
            Email address <br />
            <input style={{ cursor: 'pointer' }} type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </label>
        </div>
      </div>

      <div className="right-box1">
        <p data-aos="fade-right" className="paragraph3">
          One email a week — new arrivals, restocks and subscriber-only deals. No spam, unsubscribe any time.
        </p>
        <p data-aos="fade-right" className="paragraph4">
          Your discount code lands in your inbox the moment you confirm the subscription.
        </p>
      </div>
    </section>
  )
}
