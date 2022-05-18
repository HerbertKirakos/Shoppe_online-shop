import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../store/cartSlice";
import { Quantity } from "../components/Quantity";
import { MainLayout } from "../layouts/MainLayout";
import { ProductTabs } from "../components/Tabs";
import { ProductCard } from "../components/ProductCard";
import { products } from "../MOCK";
import { Button } from "../components/UI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Image03 from "../assets/img/Image03.png"
import HeartIcon from "../assets/svg/HeartIcon.svg";
import FBIcon from "../assets/svg/FBIcon.svg";
import InstaIcon from "../assets/svg/InstaIcon.svg";
import TwitterIcon from "../assets/svg/TwitterIcon.svg";
import EmailIcon from "../assets/svg/EmailIcon.svg";
import ArrowRightIcon2 from "../assets/svg/ArrowRightIcon2.svg"

export const ProductPage = () => {
    const params = useParams();
    const prodDetail = products.filter(e => e.id === +params.id)

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [count, setCount] = useState(1);

    const handleAddToCart = () => {
        toast("Item added successfully!")
        dispatch(setCartItems([
            ...cartItems, 
            { 
                id: params.id, 
                image: prodDetail[0].imageSrc,
                name: prodDetail[0].name,  
                count: count, 
                price: prodDetail[0].price,
            }
        ]));
    }
  
    return (
        <MainLayout>
            <Helmet>
                <title>SHOPPE | Product</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto py-16 px-4 md:py-24">
                <div className="md:flex justify-between mb-24">
                    <div className="md:flex">
                        <div className="md:flex md:flex-col gap-10 mr-10 hidden">
                            <img src={Image03} className="max-w-[120px] max-h-[120px] rounded-lg"/>
                            <img src={Image03} className="max-w-[120px] max-h-[120px] rounded-lg"/>
                            <img src={Image03} className="max-w-[120px] max-h-[120px] rounded-lg"/>
                            <img src={Image03} className="max-w-[120px] max-h-[120px] rounded-lg"/>
                        </div>
                        <div className="border-b-2 border-b-dark-gray mb-6 md:mb-0">
                            <img src={prodDetail[0]?.imageSrc} alt={prodDetail[0]?.imageAlt} className="mb-6 md:w-[540px]"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="mb-16">
                            <h2 className="text-heading2 text-black font-normal mb-6">
                                {prodDetail[0]?.name}
                            </h2>
                            <h3 className="text-heading3 text-accent font-medium">
                               $ {prodDetail[0]?.price}
                            </h3>
                        </div>

                        <div>
                            <div className="mb-5">
                                <h4 className="text-heading4 text-dark-gray font-medium">
                                    1 customer review
                                </h4>
                            </div>
                            <p className="text-heading4 text-dark-gray font-medium max-w-[486px] mb-12">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aliquam placerat, augue a volutpat hendrerit, 
                                sapien tortor faucibus augue, a maximus elit ex vitae libero. 
                                Sed quis mauris eget arcu facilisis consequat sed eu felis. 
                            </p>
                            <div className="md:flex md:items-center gap-6 mb-20">
                                <div className="hidden md:flex">
                                    <Quantity value={count} setValue={setCount}/>
                                </div>
                                <Button title="ADD TO CART" onClick={handleAddToCart}/>
                                <ToastContainer/>
                            </div>
                            <div className="flex items-center mb-9">
                                <div className="border-r border-r-gray mr-10 flex items-center">
                                    <button  className="mr-10">
                                        <img src={HeartIcon}/>
                                    </button>
                                </div>
                                <ul className="flex gap-6">
                                    <li>
                                        <NavLink to="/">
                                            <img src={EmailIcon}/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">
                                            <img src={FBIcon}/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">
                                            <img src={InstaIcon}/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">
                                            <img src={TwitterIcon}/>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-start mb-2">
                                <h4 className="text-heading4 text-black font-medium mr-4">
                                    SKU:
                                </h4>
                                <span className="text-bodyLarge text-dark-gray font-normal">
                                    12
                                </span>
                            </div>
                            <div className="flex items-start">
                                <h4 className="text-heading4 text-black font-medium mr-4">
                                    Categories:
                                </h4>
                                <span className="text-bodyLarge text-dark-gray font-normal">
                                    Fashion, Style
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <ProductTabs/>
                </div>

                <div>
                    <h1 className="md:text-heading1 text-heading4 font-medium text-black mb-12">
                        Similar Items
                    </h1>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                        products.slice(1, 4).map((product,i) => (
                            <NavLink to={`/product/${product.id}`} key={i} >
                                <ProductCard product={product}/>
                            </NavLink>
                        ))
                    }
                    </div>
                    <div className="md:hidden">
                        <NavLink to="/" className="flex justify-between items-center">
                            <span className="text-bodySmall text-accent font-normal">
                                Continue shopping
                            </span>
                            <img src={ArrowRightIcon2}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}