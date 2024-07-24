import './Hero.css'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='left'>
        <img src="/assets/img/hero-left.png" alt="" />
      </div>
      <div className='center'>
        <h1 className='title'>Learn With Us anywhere with the best <span className='underline'>experts</span></h1>
        <p>We collaborate with 275+ leading universities and companies</p>
        <div className='search'>
          <input type="text" placeholder='Want do you want to learn?' />
          <button>Explore</button>
        </div>

      </div>
      <div className='right'>
        <img src="/assets/img/hero-right.png" alt="" />
      </div>
    </div>
  )
}
