import { NavLink } from "react-router-dom"

import ArrowRightIcon from "../../assets/svg/ArrowRightIcon.svg"
import INIcon from "../../assets/svg/INIcon.svg"
import FBIcon from "../../assets/svg/FBIcon.svg"
import InstaIcon from "../../assets/svg/InstaIcon.svg"
import TwitterIcon from "../../assets/svg/TwitterIcon.svg"


export const Footer = () => {
    return (
        <footer className="container md:border-t md:border-t-light-gray max-w-screen-xl mx-auto md:mb-20 mb-8 px-4">
            <div className="mt-14 md:flex md:flex-row-reverse justify-between items-center mb-12">
                <div>
                    <NavLink to="/" className="md:text-heading4 text-bodyMedium text-dark-gray font-normal whitespace-nowrap flex items-center md:gap-32 justify-between mb-3 md:mb-0 border-b">
                        Give an email, get the newsletter.
                        <img src={ArrowRightIcon}/>
                    </NavLink>
                    <div className="flex items-center mb-10 md:hidden"> 
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-dark-gray rounded bg-white" required/>
                        </div>
                        <label htmlFor="terms" className="ml-2 text-bodySmall font-normal text-black">
                            I agree to the website’s terms and conditions
                        </label>
                    </div>
                </div>
                <ul className="md:flex text-heading4 text-dark-gray font-normal md:gap-10">
                    <li>
                        <NavLink to="/contact" className="px-1 py-1 hover:text-black">
                            CONTACT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/"  className="px-1 py-1 hover:text-black">
                            TERMS OF SERVICES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/"  className="px-1 py-1 hover:text-black">
                            SHIPPING AND RETURNS
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="md:flex md:flex-row-reverse md:justify-between md:items-center">
                <ul className="flex gap-10 mb-10 md:mb-0">
                    <li>
                        <a href="https://www.linkedin.com" target={'_blank'}>
                            <img src={INIcon}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target={'_blank'} >
                            <img src={FBIcon}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target={'_blank'}>
                            <img src={InstaIcon}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target={'_blank'}>
                            <img src={TwitterIcon}/>
                        </a>
                    </li>
                </ul>
                <h4 className="md:text-heading4 text-bodySmall text-dark-gray font-normal">
                    © 2021 Shelly. Terms of use and privacy policy.
                </h4>
            </div>
        </footer>
    )
}