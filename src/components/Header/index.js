import { NavLink } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

import Logo from "../../assets/svg/Logo.svg"
import MenuIcon from "../../assets/svg/MenuIcon.svg"
import SearchIcon from "../../assets/svg/SearchIcon.svg"
import CartIcon from "../../assets/svg/CartIcon.svg"
import ProfileIcon from "../../assets/svg/ProfileIcon.svg"

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const cartItems = useSelector(state => state.cart.items);
    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = e => {
          
          if (isOpen && ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [isOpen])
    
    return (
        <header className="container flex flex-wrap md:flex-nowrap justify-between items-center max-w-screen-xl mx-auto mt-12 mb-5 px-4">
            <NavLink to="/" className="mr-2">
                <img src={Logo}/>
            </NavLink>

            <div className="md:hidden flex items-center">
                <ul>
                    <li>
                        <NavLink to="/cart" className="block py-2 px-2 rounded-full hover:bg-light-gray relative">
                            <div className="p-0.5 absolute -top-2 -right-2 bg-white rounded-full border w-6 h-6 text-bodySmall text-center">
                                {cartItems.length}
                            </div>
                            <img src={CartIcon}/>
                        </NavLink>
                    </li>
                </ul>
            
                <div className="flex justify-end relative">
                    <button onClick={toggling} type="button" className="inline-flex items-center p-2 ml-3 text-dark-gray" ref={ref}>
                        <img src={MenuIcon}/>
                    </button>
                    {
                        isOpen && (
                            <ul className="flex flex-col bg-white text-bodyMedium border border-light-gray font-normal text-black gap-2 absolute z-50 mt-10 whitespace-nowrap rounded">
                                <li className="block py-1 px-3 hover:border-b">
                                    <NavLink to="/shop">
                                        Shop
                                    </NavLink>
                                </li>
                                <li className="block py-1 px-3 hover:border-b"> 
                                    <NavLink to="/blog">
                                        Blog
                                    </NavLink>
                                </li>
                                <li className="block py-1 px-3 hover:border-b">
                                    <NavLink to="/our-story">
                                        Our Story
                                    </NavLink>
                                </li>
                                <li className="block bg-light-gray py-1 px-3 hover:border-b">
                                    <NavLink to="/our-story">
                                        My Account
                                    </NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
            
            <div className="px-3 py-1.5 flex items-center bg-light-gray mt-3 w-full rounded md:hidden">
                <img src={SearchIcon} className="w-3 mr-2"/>
                <input 
                    type="text" 
                    id="search" 
                    className="block w-full outline-none text-dark-gray text-bodyMedium font-normal bg-light-gray sm:text-xs" 
                    placeholder="Search"
                />
            </div>

            <div className="flex items-center max-h-[42px]">
                <div className="hidden w-full md:block md:w-auto border-r">
                    <ul className="flex flex-col md:flex-row md:space-x-8 text-heading4 font-normal text-black gap-12 whitespace-nowrap">
                        <li>
                            <NavLink to="/shop" className="block py-2 px-2 hover:border-b">
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="block py-2 px-2 hover:border-b">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/our-story" className="block py-2 px-2 mr-12 hover:border-b">
                                Our Story
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="hidden w-full md:block md:w-auto ml-12">
                    <ul className="flex flex-col md:flex-row md:space-x-8">
                        <li>
                            <button to="/" className="block py-2 px-2 rounded-full hover:bg-light-gray">
                                <img src={SearchIcon}/>
                            </button>
                        </li>
                        <li>
                            <NavLink to="/cart" className="block py-2 px-2 rounded-full hover:bg-light-gray relative">
                                <div className="p-0.5 absolute -top-2 -right-2 bg-white rounded-full border w-6 h-6 text-bodySmall text-center">
                                    {cartItems.length}
                                </div>
                                <img src={CartIcon}/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-account" className="block py-2 px-2 rounded-full hover:bg-light-gray">
                                <img src={ProfileIcon}/>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}