import { Navigate } from 'react-router-dom'

const Authorized = ({ getUnauthorized, getForbidden, children }) => {
  if (getUnauthorized()) return <Navigate to="/login" />
  if (getForbidden && getForbidden()) return <Navigate to="/403" />
  return children
}

export default Authorized
