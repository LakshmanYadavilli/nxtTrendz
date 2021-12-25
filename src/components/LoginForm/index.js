// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    password: '',
    error: false,
    msg: '',
  }

  success = () => {
    const {history} = this.props
    history.replace('/')
  }

  failure = n => {
    this.setState({error: true, msg: n})
  }

  check = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const details = {userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.success()
    } else {
      this.failure(data.error_msg)
    }
  }

  userName = event => {
    this.setState({userName: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {error, msg, userName, password} = this.state
    return (
      <div className="loginForm">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="formContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form onSubmit={this.check}>
            <label htmlFor="userName">USERNAME</label>
            <br />
            <input
              id="userName"
              placeholder="UserName"
              type="text"
              onChange={this.userName}
              value={userName}
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              id="password"
              placeholder="Password"
              type="password"
              onChange={this.password}
              value={password}
            />
            {error && <p>{msg}</p>}
            <br />
            <button type="button">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
