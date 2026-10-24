const features = ['Awesome components', 'Ready to use', 'Awesome components', 'Ready to use']

export default function SeventhSection() {
  return (
    <section className="seventh-section">
      <div className="left-box2">
        <h2 data-aos="fade-up">Summary of new product characteristics</h2>
        <p data-aos="fade-up">
          Occaecati doloribus et laborum magnam. Aut eaque enim quia vel. Soluta consequatur enim temporibus cumque
          commodi tempora est tempora odio.
        </p>
        <div className="texts">
          {features.map((f, i) => (
            <div className="text2" key={i}>
              <img data-aos="fade-up" src="./assets/img/icon.png" alt="" width="24px" height="24px" />
              <span data-aos="fade-up">{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-box2">
        <img data-aos="zoom-out" src="./assets/img/home-3-imge-1.jpg" width="600px" height="550px" alt="" />
      </div>
    </section>
  )
}
