const heroImages = [
  {
    src: 'https://framerusercontent.com/images/ZIKhDqAKcqJ9SnZ8BzyMcp4Hjc.jpg?scale-down-to=1024',
    className: 'gakuyen-hero__photo gakuyen-hero__photo--back-left',
    alt: '',
  },
  {
    src: 'https://framerusercontent.com/images/WyUqqoduV40XoPN9Wt9xqpvy34.jpg?scale-down-to=1024',
    className: 'gakuyen-hero__photo gakuyen-hero__photo--back-right',
    alt: '',
  },
  {
    src: 'https://framerusercontent.com/images/UU3GtY5tQEyD4SBToAUyD9FAJsg.jpg?scale-down-to=1024',
    className: 'gakuyen-hero__photo gakuyen-hero__photo--front',
    alt: '',
  },
  {
    src: 'https://framerusercontent.com/images/Hex6l6j0QNCYp1bf3dMIGG2duRI.jpeg?scale-down-to=1024',
    className: 'gakuyen-hero__photo gakuyen-hero__photo--lower',
    alt: '',
  },
];

const logoItems = [
  'Nike',
  'Toyota',
  'The North Face',
  'New Balance',
  'Apple',
  'Adidas',
  'AirAsia',
  'Puma',
  'Intel',
  'Lenovo',
  'Adobe',
  'DJI',
  'H&M',
  'Zara',
  'Ferrari',
  'Reebok',
];

function Hero() {
  return (
    <section id="hero" className="gakuyen-hero" aria-labelledby="hero-title">
      <div className="gakuyen-hero__container">
        <div className="gakuyen-hero__content">
          <div className="gakuyen-hero__availability">
            <span className="gakuyen-hero__pulse" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>Available for Inquiries</span>
          </div>

          <div className="gakuyen-hero__copy">
            <h1 id="hero-title" className="gakuyen-hero__title">
              <span>Modern</span>
              <span>renaissance</span>
            </h1>

            <div className="gakuyen-hero__description">
              <p>
                <strong>PERHAPS TODAY ✨</strong>
              </p>
              <p>
                hello, I&apos;m <strong>Gaku</strong> - a mixed-media specialist based out of{' '}
                <strong>Tokyo, Japan</strong>.
              </p>
              <p>I execute photo, video, and design projects.</p>
            </div>
          </div>

          <a
            className="gakuyen-hero__cta"
            href="mailto:karatitsynkiril@gmail.com?subject=Project%20inquiry"
            aria-label="Send me a message"
          >
            <span className="gakuyen-hero__avatar" aria-hidden="true">
              <img
                src="https://framerusercontent.com/images/FwmyFTTuxWsJskMDXqaxNRts.jpg?scale-down-to=512"
                alt=""
              />
              <span className="gakuyen-hero__plus">
                <span />
                <span />
              </span>
            </span>
            <span>Send me a message</span>
          </a>
        </div>

        <div className="gakuyen-hero__visual" aria-hidden="true">
          <div className="gakuyen-hero__photo-stack">
            {heroImages.map((image) => (
              <img key={image.src} className={image.className} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
      </div>

      <div className="gakuyen-hero__logos" aria-label="Trusted by many">
        <div className="gakuyen-hero__logos-inner">
          <p>
            Trusted by <strong>many</strong>
          </p>
          <div className="gakuyen-hero__ticker" aria-hidden="true">
            <div className="gakuyen-hero__ticker-track">
              {[...logoItems, ...logoItems, ...logoItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
