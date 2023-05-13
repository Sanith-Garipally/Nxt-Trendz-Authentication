import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-bg-container">
      <div className="section-left">
        <h1 className="head-1">Clothes That Get YOU Noticed</h1>
        <img
          className="section-left-img"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
        <p className="para-1">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button className="shop-now-btn" type="button">
          shop now
        </button>
      </div>
      <div className="section-right">
        <img
          className="section-right-img"
          alt="clothes that get you noticed"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        />
      </div>
    </div>
  </>
)

export default Home
