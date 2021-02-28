import './navbar.sass'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
        <ul>
          <Link className='main-disable-link' to='/'>
            <div className='logo'>
              <div className='logo__logotip'>
                <span className='logo__text'>RPS</span>
              </div>
              <p className='logo__sublogo'>Rock-Paper-Scissors</p>
            </div>
          </Link>
          <div className='link'>
            <li><Link className='disabled-link' to='/table'>table</Link></li>
            <li><Link className='disabled-link' to='/signin'>sign in</Link></li>
            <li><Link className='disabled-link' to='/signup'>sign up</Link></li>
            <li><Link className='disabled-link' to='/logout'>log out</Link></li>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar

