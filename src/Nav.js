import React from 'react'
import Logo from './images/logo.svg'
import { Link } from 'react-router-dom'
import BurgerIcon from './images/icon-hamburger.svg'
import Closeİcon from './images/icon-close.svg'

function Nav(){
    const [open,setOpen] = React.useState(false)

    function close(){
        setOpen(false)
    }

  return (
    <header>
        <nav className={`nav ${open ? 'show':""}`}>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul>
                <li onClick={close} className='active'><Link to='/'>00  HOME</Link></li>
                <li onClick={close}><Link to='/destination'>01  DESTİNATİON</Link></li>
                <li onClick={close}><Link to='/crew'>02  CREW</Link></li>
                <li onClick={close}><Link to='/technology'>03  TECHNOLOGY</Link></li>
            </ul>
            <div onClick={() => setOpen(!open)} className='burger'>
                {
                    open === false ?

                        <img src={BurgerIcon} alt='' /> :
                        <img src={Closeİcon} alt='' />
                }
                
            </div>
        </nav>
    </header>
  )
}

export default Nav