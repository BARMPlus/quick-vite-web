import { Redirect } from 'react-router-dom'

const Authorized = ({ getUnauthorized, getForbidden, children }) => {
  if (getUnauthorized()) return <Redirect to="/login" />
  if (getForbidden && getForbidden()) return <Redirect to="/403" />
  return children
}

export default Authorized
