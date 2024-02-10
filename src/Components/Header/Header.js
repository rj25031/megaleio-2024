import { useState } from 'react'
import MegaleioLogo from '../../images/anime meg.png'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const buttonClickHandler = () => {
    if (!isOpen) {
      setIsOpen(true)
    } else if (isOpen) {
      setIsOpen(false)
    }
  }

  const nav_list =
    'mx-5 xl:mx-0 py-2 text-xl  xs:text-md px-5 hover:bg-orange-600 text-white transtion-all duration-500 hover:cursor-pointer'
  return (
    <div className="fixed top-0 z-50">
      <div className="flex justify-between items-center px-20 lg:px-10 p-5 bg-transparent">
        <Link to="/">
          <div className="flex items-center">
            <img
              className="w-16 xs:w-12"
              src={MegaleioLogo}
              alt="Megaleio"
            />
            <h1 className="mx-5 text-4xl sm:text-2xl xs:text-lg font-bold text-orange-600   ">
              M E G A L E I O
            </h1>
          </div>
        </Link>

        <div className="xl:hidden">
          <ul className="flex ">
            <Link to="/schedule">
              <li className={nav_list}>Home</li>
            </Link>
            <Link to="/events">
              {' '}
              <li className={nav_list}>Events</li>
            </Link>
            <Link to="/">
              <li className={nav_list}>Schedule</li>
            </Link>
            {/* <Link to="/register">
              {' '}
              <li className={nav_list}>Registration</li>
            </Link> */}
            <Link to="/about">
              {' '}
              <li className={nav_list}>About us</li>
            </Link>
          </ul>
        </div>
        <div className="text-orange-600 text-3xl xs:text-xl transtion-all duration-500 hover:cursor-pointer hidden xl:block">
          {!isOpen && (
            <div onClick={buttonClickHandler}>
              <AiOutlineMenu />
            </div>
          )}
          {isOpen && (
            <div onClick={buttonClickHandler}>
              <AiOutlineClose />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className=" bg-black lg:px-0 transtion-all duration-500 hover:cursor-pointer">
          <ul>
            <Link to="/">
              <li className={nav_list}>Home</li>
            </Link>
            <Link to="/events">
              {' '}
              <li className={nav_list}>Events</li>
            </Link>
            <Link to="/schedule">
              <li className={nav_list}>Schedule</li>
            </Link>
            {/* <Link to="/register">
              {' '}
              <li className={nav_list}>Registration</li>
            </Link> */}
            <Link to="/about">
              {' '}
              <li className={nav_list}>About us</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header
