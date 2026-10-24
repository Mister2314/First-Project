const homeLinks = ['Main home', 'Agency Light', 'Tech Store', 'Agency Dark', 'App Showcase', 'Business Expo', 'Consulting Home', 'Résumé Home', 'Landing']
const pagesLinks = ['About Us', 'Our Services', 'Coming Soon']
const shopLinks = ['Product List', 'Product Single', 'Cart']
const blogLinks = ['Blog Standart', 'Blog Masonry', 'Standard Post', 'Gallery Post', 'Quote Post', 'Link Post', 'Video Post', 'Audio Post', 'No Slidebar Post']
const portfolioLinks = ['Portfolio List', 'Big Images', 'Small Images', 'Big Slider', 'Small Slider', 'Big Gallery', 'Small Gallery']

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="boxes-container">
          <div className="box-1">
            <h4 data-aos="fade-right">
              Wade cares about the team <br /> members and their product <br /> growth.
            </h4>
            <h4 data-aos="fade-right" className="a-text">
              <a href="">wade@info.com</a>
            </h4>
          </div>
          <div className="box-2">
            <div data-aos="fade-up" className="left-box-1">
              <p>Home</p>
              <ul>
                {homeLinks.map((l) => (
                  <li data-aos="fade-up" key={l}>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-box-1">
              <p data-aos="fade-up">Pages</p>
              <ul>
                {pagesLinks.map((l) => (
                  <li data-aos="fade-up" key={l} style={l === 'Coming Soon' ? { marginBottom: 40 } : undefined}>
                    {l}
                  </li>
                ))}
                <p data-aos="fade-up">Shop</p>
                <ul>
                  {shopLinks.map((l) => (
                    <li data-aos="fade-up" key={l}>
                      {l}
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </div>
          <div className="box-3">
            <div data-aos="fade-up" className="left-box-2">
              <p>Blog</p>
              <ul>
                {blogLinks.map((l) => (
                  <li data-aos="fade-up" key={l}>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-box-2">
              <p data-aos="fade-up">Portfolio</p>
              <ul>
                {portfolioLinks.map((l) => (
                  <li data-aos="fade-up" key={l}>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <section className="footer-bottom">
          <div className="left">
            <img src="./assets/img/wade-footer-logo-light.png" alt="" />
          </div>
          <div className="text">
            <h1>© 2022 Qode Interactive, All Rights Reserved</h1>
          </div>
          <div className="right">
            <i className="fa-brands fa-twitter" style={{ color: '#ffffff' }} />
            <i className="fa-brands fa-pinterest-p" style={{ color: '#ffffff' }} />
            <i className="fa-brands fa-facebook-f" style={{ color: '#ffffff' }} />
          </div>
        </section>
      </div>
    </footer>
  )
}
