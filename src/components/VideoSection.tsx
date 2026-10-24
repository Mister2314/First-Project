export default function VideoSection() {
  return (
    <section className="video-section">
      <video data-aos="zoom-out" autoPlay loop muted playsInline preload="metadata">
        <source src="./assets/video/Home-3-Video.mp4" type="video/mp4" />
      </video>
      <img
        data-aos="zoom-out"
        className="video-holder-img"
        src="./assets/img/Home-3-video-holder-img.jpg"
        width="168px"
        height="136px"
        alt=""
      />
      <img
        data-aos="zoom-out"
        className="video-holder2-img"
        src="./assets/img/baner-img-1.jpg"
        width="210px"
        height="72px"
        alt=""
      />
      <div className="text-container">
        <h5 data-aos="fade-up" style={{ fontWeight: 400 }}>
          Occaecati doloribus et laborum magnam. Aut eaque enim quia vel. Soluta consequatur enim temporibus cumque
          commodi tempora est tempora odio.
        </h5>
        <a data-aos="fade-up" href="https://wade.qodeinteractive.com/shop/">
          <span>See our products</span>
        </a>
      </div>
    </section>
  )
}
