export default function Header() {
  return (
    <header className="header">
      <div className="boxes">
        <div className="left-box">
          <img
            className="img"
            style={{ cursor: 'pointer' }}
            src="./assets/img/Home-3-Logo.png"
            width="90px"
            height="39px"
            alt="wade"
          />
          <ul>
            <li>
              Home<span className="material-symbols-outlined">expand_more</span>
            </li>
            <li>
              Shop<span className="material-symbols-outlined">expand_more</span>
            </li>
            <li>About</li>
            <li>Gallery</li>
            <li>Features</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="right-box">
          <p>Call</p>
          <p className="paragraph1-1" style={{ marginRight: 20, cursor: 'pointer' }}>
            (322) 512 08 15
          </p>
          <i
            className="fa-solid fa-bag-shopping"
            style={{ color: 'white', display: 'flex', alignItems: 'center', fontSize: 30, marginRight: 32 }}
          />
          <span style={{ cursor: 'pointer' }} className="shop-items">
            0
          </span>
          <button>Get a Quote</button>
        </div>
      </div>
    </header>
  )
}
