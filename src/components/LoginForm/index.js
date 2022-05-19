import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: false,
    error: '',
  }

  onNameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMessage: true, error: data.error_msg})
    }
  }

  render() {
    const {username, password, errorMessage, error} = this.state
    console.log(username, password)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="website-login-img-hidden"
          alt="website login"
        />
        <div className="bg-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="website-login-img"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.onSubmit}>
            <div className="input-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                className="input"
                onChange={this.onNameChange}
              />
            </div>
            <div className="input-container">
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                className="input"
                onChange={this.onPasswordChange}
              />
            </div>

            <button type="submit" className="submit-button">
              Login
            </button>
            {errorMessage && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
