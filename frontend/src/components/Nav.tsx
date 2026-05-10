import { NavLink } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import type { NavBarLink } from '../types/NabarTypes';

const navBarLinks: NavBarLink[] = [
  {
    route: "/",
    name: "Home"
  },
  {
    route: "/search",
    name: "Search"
  },
  {
    route: "/listings/new",
    name: "Create ad"
  },
  {
    route: "/rental-request",
    name: "My reservation"
  }
]

const Nav = () => {
  return (
    <>
        <header className='header'>
          <div className='header-container'>
            <img className='headerLogo' src={logo} alt="GearLogo" />
            <div className='headerText'>
              <span className='headerText_title'>GEARSHARE</span>
              <span className='headerText_country'>Canada</span>
            </div>
          </div>
          <nav className='navbar'>
            {navBarLinks.map(link => 
              <NavLink key={link.route} to= {link.route} className={({isActive}) => `navbarBtn ${isActive ? "navbarBtn-active" : ""}`}>{link.name}</NavLink>
            )}
          </nav>   
          <div className='navbar-btnProfil'>
            <NavLink to= "">Profil</NavLink>     
          </div> 
        </header>
    </>
  )
}
export default Nav;