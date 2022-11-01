import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {
    isLogged: false,
  }

  onClickChange = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="main-container">
        <div className="container">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout logout={this.onClickChange} />
          ) : (
            <Login login={this.onClickChange} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
