import { MainLayout } from "../layouts/MainLayout";
import {  useSelector } from "react-redux";
import Helmet from "react-helmet";
import { Button } from "../components/UI";
import { ProductCartList } from "../components/ProductCartList";

export const CartPage = () => {
    
    const total = useSelector(state => state.cart.total);
    
    return (
        <MainLayout>
            <Helmet>
                <title> SHOPPE | Cart </title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto py-16 px-4 md:py-24">
                <h1 className="text-heading1 text-black text-center font-semibold mb-16">
                    Shopping Cart
                </h1>
                <div className="md:grid md:grid-cols-2">
                    <div className="max-w-xl mb-10 md:mb-0">
                        <div>
                            <ProductCartList/> 
                        </div>
                        
                        <div className="mb-16 flex justify-end">
                            <Button title="UPDATE CART" className="md:max-w-[180px]"/>
                        </div> 
                        
                        <div className="md:flex md:justify-between">
                            <div className="border-b border-light-gray mr-16 w-full mb-4 md:mb-0">
                                <input type="name" className="w-full text-bodySmall text-dark-gray outline-none" placeholder="Coupon Code" required />
                            </div>
                            <div>
                                <Button title="APPLY COUPON" outlined={false}/>
                            </div>
                        </div>
                    </div>  
                    
                    <div className="md:px-14 px-4 md:py-12 py-4 max-w-xl flex flex-col bg-light-gray md:bg-white rounded">
                        <h2 className="md:text-heading2 text-heading4 text-black font-normal md:mb-10 mb-6">
                            Cart totals
                        </h2>

                        <div className="border-b border-gray mb-10">
                            <div className="flex mb-6">
                                <h4 className="md:text-heading4 text-bodySmall text-black md:mr-32 mr-12">
                                    SUBTOTAL
                                </h4>
                                <span className="md:text-bodyLarge text-bodySmall text-dark-gray">
                                    $ {(total).toFixed(1)} 
                                </span>
                            </div>

                            <div className="flex md:mb-10 mb-6">
                                <h4 className="md:text-heading4 text-bodySmall text-black md:mr-32 mr-12">
                                    SHIPPING  
                                </h4>
                                <span className="md:text-bodyLarge text-bodySmall text-dark-gray max-w-[250px]">
                                    Shipping costs will be calculated once you have provided address.
                                </span>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="max-w-[250px] w-full mb-6">
                                    <h4 className="md:text-heading4 text-bodySmall text-black mb-6">
                                        CALCULATE SHIPPING 
                                    </h4>
                                    <div>
                                        <select 
                                            id="underline_select" 
                                            className="block py-2.5 px-2 w-full text-bodySmall text-dark-gray md:bg-white bg-light-gray border-b border-gray appearance-none focus:outline-none focus:ring-0 focus:border-gray peer mb-6"
                                        >
                                            <option className="bg-light-gray">SELECT A COUNTRY</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                        </select>

                                        <select 
                                            id="underline_select" 
                                            className="block py-2.5 px-2 w-full text-bodySmall text-dark-gray md:bg-white bg-light-gray border-b border-gray appearance-none focus:outline-none focus:ring-0 focus:border-gray peer mb-6"
                                        >
                                            <option className="bg-light-gray">CITY</option>
                                            <option value="US">Washington</option>
                                            <option value="CA">Ottawa</option>
                                            <option value="FR">Paris</option>
                                            <option value="DE">Berlin</option>
                                        </select>

                                        <select 
                                            id="underline_select" 
                                            className="block py-2.5 px-2 w-full text-bodySmall text-dark-gray md:bg-white bg-light-gray border-b border-gray appearance-none focus:outline-none focus:ring-0 focus:border-gray peer mb-6"
                                        >
                                            <option className="bg-light-gray">POST CODE / ZIP</option>
                                            <option value="US">0808</option>
                                            <option value="CA">1289</option>
                                            <option value="FR">7889</option>
                                            <option value="DE">2564</option>
                                        </select>
                                    </div>
                                    <div className="mb-10">
                                        <Button title="UPDATE TOTALS"/>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        
                        <div className="flex justify-between mb-10">
                            <span className="text-bodyLarge text-black font-bold">
                                TOTAL
                            </span>
                            <span className="text-bodyLarge text-black font-bold">
                                {(total).toFixed(1)} $
                            </span>
                        </div>

                        <div>
                            <Button title="PROCEED TO CHECKOUT" outlined={false}/> 
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}