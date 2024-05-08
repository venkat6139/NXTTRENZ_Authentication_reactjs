import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label className="username-label" htmlFor="username">
          USERNAME
        </label>
        <input
          onChange={this.onChangeUsername}
          placeholder="Username"
          className="username-input"
          id="username"
          type="text"
          value={username}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="username-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          onChange={this.onChangePassword}
          placeholder="Password"
          className="username-input"
          id="password"
          type="password"
          value={password}
        />
      </>
    )
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log(username, password)
    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      const error = data.error_msg
      const errorMsg = `*${error}`
      this.setState({errorMsg})
    }
  }

  render() {
    const {errorMsg} = this.state
    return (
      <>
        <div className="login-bg-container">
          <div className="desktop-photo-container">
            <img
              className="desktop-photo"
              alt="website login"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              className="logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            <button className="submit-button" type="submit">
              Login
            </button>
            <p className="error-msg">{errorMsg}</p>
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
