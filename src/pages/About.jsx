import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="about-page page-section">
      <div className="about-art" aria-hidden="true">
        <span>☀️</span>
        <span>🌼</span>
        <span>☕</span>
      </div>
      <div className="about-copy">
        <span className="eyebrow">A SMALL SHOP WITH A SOFT SPOT FOR THE EVERYDAY</span>
        <h1>We believe in<br /><span>the little things.</span></h1>
        <p className="about-lede">
          The Good Goods is a happy little corner for things that make your
          everyday feel a bit more like your kind of day.
        </p>
        <p>
          A favorite mug. A notebook for the thoughts you don’t want to lose.
          A candle that makes staying in feel like the plan. We bring together
          simple, thoughtful finds that are lovely to use and even lovelier to give.
        </p>
        <p>
          No big fuss, no endless scrolling — just a few good things, picked
          with care. We’re glad you found us.
        </p>
        <Link className="button button-dark" to="/">Have a little look around <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  )
}

export default About
