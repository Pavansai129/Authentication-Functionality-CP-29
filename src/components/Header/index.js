import {withRouter, Link} from 'react-router-dom'

// Write your JS code here
const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default withRouter(Header)
