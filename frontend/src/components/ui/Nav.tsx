import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';

const Nav = () => {
  return (
    <>
        <header className='header'>
          <div className='headerLogo'>
            <img className='headerLogo-logo' src={logo} alt="GearLogo" />
            <div className='headerLogo-text'>
              <span className='headerLogo-text_title'>GEARSHARE</span>
              <span className='headerLogo-text_country'>Canada</span>
            </div>
          </div>
          <nav className='navbar'>
              <NavLink to= "/" className={({isActive}) => `navbarBtn ${isActive ? "navbarBtn-active" : ""}`}>Home</NavLink>
              <NavLink to= "/search" className={({isActive}) => `navbarBtn ${isActive ? "navbarBtn-active" : ""}`}>Search</NavLink>
              <NavLink to= "/listings/new" className={({isActive}) => `navbarBtn ${isActive ? "navbarBtn-active" : ""}`}>Create ad</NavLink>
              <NavLink to= "/rental-request" className={({isActive}) => `navbarBtn ${isActive ? "navbarBtn-active" : ""}`}>My reservation</NavLink>
          </nav>   
          <div className='navbar-btnProfil'>
            <NavLink to= "">Profil</NavLink>     
          </div> 
        </header>
    </>
  )
}
export default Nav;