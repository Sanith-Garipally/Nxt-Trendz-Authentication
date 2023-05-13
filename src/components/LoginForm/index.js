import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  handleInputChange = e => {
    if (e.target.id === 'username') {
      this.setState({
        username: e.target.value,
      })
    } else {
      this.setState({
        password: e.target.value,
      })
    }
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({
      errorMessage: error,
    })
  }

  handleFormSubmit = async e => {
    e.preventDefault()

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
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-bg-container">
        <div className="login-img-container">
          <img
            className="website-logo-left"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <img
            className="website-login-img"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          />
        </div>
        <div className="login-form-container">
          <img
            className="website-logo-right"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <form className="login-form" onSubmit={this.handleFormSubmit}>
            <div className="form-item">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                placeholder="Username"
                className="input"
                id="username"
                type="text"
                onChange={this.handleInputChange}
                value={username}
              />
            </div>

            <div className="form-item">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                placeholder="Password"
                className="input"
                id="password"
                type="password"
                onChange={this.handleInputChange}
                value={password}
              />
            </div>

            <div className="form-item">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
            {errorMessage && <p className="error-message">*{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
