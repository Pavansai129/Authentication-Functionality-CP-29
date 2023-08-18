import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
// Write your JS code here
const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  const setJwtToken = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 3})
    history.replace('/')
  }
  const onClickLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      setJwtToken(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <>
      <h1>Please Login</h1>
      <button type="button" onClick={onClickLogin}>
        Login With Sample Creds
      </button>
    </>
  )
}

export default Login
