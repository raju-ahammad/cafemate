import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App';



const Header = () => {
  const context = useContext(MyContext)
  const { token, logout, isAdmin } = context;

  console.log("isAdmin from header", isAdmin);

  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container d-flex justify-between">
        <Link to="/" className="light">
          Cafemate
        </Link>
        <div>
          {
            token ?
            <>
            {
              isAdmin === 1 ? <Link className="mx-4" to="/dashboard" >Dashboard</Link>: ""
            } 
            <Link to="/" onClick={logout}>Logout</Link> 
            </>
            :<>
            <Link className="m-4" to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </>
          }
        
        </div>
      </div>
    </nav>
  )
}

export default Header
