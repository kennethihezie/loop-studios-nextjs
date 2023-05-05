import Image from 'next/image'
import styles from './styles.module.css'

interface INavBarProps {
    click: () => {}
    isOpen: boolean
}

const NavBar = ({click, isOpen}: INavBarProps) => {
    return (
        <nav className="flex items-center justify-between font-bold text-white">
            {/* Logo */}
            <Image
              src={'images/logo.svg'}
              width={150}
              height={150}
              priority  
              alt='' />    


             {/* Menu we want the menu to be hidden in mobile screen */}
              <div className="hidden h-10 font-alata md:flex md:space-x-8">
                <div className="group">
                    <a href="#">About</a>
                    <div className="mx-0 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                    <a href="#">Careers</a>
                    <div className="mx-0 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                    <a href="#">Events</a>
                    <div className="mx-0 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                    <a href="#">Products</a>
                    <div className="mx-0 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
                <div className="group">
                    <a href="#">Contact</a>
                    <div className="mx-0 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              </div>
              {/* todo Hamburger Button*/}

              <div className="md:hidden">
                <button className={`z-40 block ${styles.hamburger} ${isOpen ? styles.open : ''} md:hidden focus:outline-none`} onClick={click}>
                   <span className={styles.hamburgerTop}></span>
                   <span className={styles.hamburgerMiddle}></span>
                   <span className={styles.hamburgerBottom}></span>
                </button>
              </div>
        </nav>
    )
}

export default NavBar