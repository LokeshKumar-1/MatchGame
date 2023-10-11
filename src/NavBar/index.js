import './index.css'

const NavBar = props => {
  const {seconds, score} = props

  return (
    <nav className="NavBar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="scoreAndTime">
        <li>
          <p className="text">
            Score:<span className="scoreAndTimeColor">{score}</span>
          </p>
        </li>

        <li className="time-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timerImage"
          />
          <p className="scoreAndTimeColor">{seconds} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
