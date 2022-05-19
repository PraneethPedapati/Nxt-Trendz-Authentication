import './index.css'
import Header from '../Header/index'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="bottom-container">
      <div className="text-container">
        <h1 className="heading">Clothes That Get YOU Noticed</h1>
        <p className="description">
          Fashion is part of the daily air and it does not quite help that
          changes all the time. Clothes have always been a marker of era and we
          are in a revolution. Your fashion makes you been seen and heard that
          way you are. So, celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button type="button" className="button">
          {' '}
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="noticed-img"
      />
    </div>
  </div>
)

export default Home
