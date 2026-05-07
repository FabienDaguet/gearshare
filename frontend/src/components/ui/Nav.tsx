import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import type { NavBarLink } from '../../types/NabarTypes';

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
          <div className='headerLogo'>
            <img className='headerLogo-logo' src={logo} alt="GearLogo" />
            <div className='headerLogo-text'>
              <span className='headerLogo-text_title'>GEARSHARE</span>
              <span className='headerLogo-text_country'>Canada</span>
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