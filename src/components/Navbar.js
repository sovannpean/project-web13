import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/authActions'
import { fetchProfile } from '../redux/actions/profileAction'


// shortcut: rfc
export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {profile} = useSelector(state => state.profReducer)
  const {isLogin} = useSelector(state => state.authReducer)
  const {auth} = useSelector(state => state.authReducer)

  useEffect(() => {
    dispatch(fetchProfile(isLogin ? auth.access_token : ""))
  }, [])

  return (
    <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"/></svg>
        </Link>
      </div>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>Home</NavLink>
        <NavLink to="/datatable" 
          className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>Data Table</NavLink>
        <NavLink to="/pricing" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>Pricing</NavLink>
        <NavLink to="/faq" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>FAQs</NavLink>
        <NavLink to="/about-us" className={({isActive}) => isActive ? "nav-link px-2 link-danger fw-bolder" : "nav-link px-2"}>About</NavLink>
      </ul>
      <NavLink 
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          } 
          to={"/profile"}>
        <img 
          src={isLogin ? profile.avatar : "https://eduport.webestica.com/assets/images/avatar/01.jpg"}
          alt="" 
          width={40} 
          className="rounded-circle mx-3 my-2" />
      </NavLink>
      <div className="col-md-3 text-end">
        <button 
          type="button" 
          onClick={() => navigate("/create")}
          className="btn btn-outline-primary me-2">Insert</button>
        {/* <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => navigate("/login")}
        >
          {
            isLogin ? "Logout" : "Login In"
          }
        </button> */}
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => isLogin ? dispatch(logout()): navigate("/login")}
        >
          {
            isLogin ? "Logout" : "Login In"
          }
        </button>
      </div>
    </header>
  )
}


