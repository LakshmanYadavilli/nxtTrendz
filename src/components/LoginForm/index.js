// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
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
    const {username, password} = this.state
    console.log(`UserName:${username},password: ${password}`)
    const details = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.success()
    } else {
      this.failure(data.error_msg)
    }
  }

  userName = event => {
    this.setState({username: event.target.value})
  }

  password = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {error, msg, username, password} = this.state
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
              value={username}
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
