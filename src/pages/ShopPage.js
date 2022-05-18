import { NavLink } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { useCallback, useState } from "react";
import Helmet from "react-helmet";
import debounce from "lodash.debounce";
import { ProductCard } from "../components/ProductCard";
import { products } from "../MOCK";
import { Select } from "../components/UI/Select";
import { Switch } from "../components/UI";

import SearchIcon from "../assets/svg/SearchIcon.svg";

export const ShopPage = () => {
    const [search, setSearch] = useState("")

    const options1 = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const options2 = [
        { value: 'canada', label: 'Canada' },
        { value: 'france', label: 'France' },
        { value: 'russia', label: 'Russia' },
        { value: 'usa', label: 'USA' },
        { value: 'germany', label: 'Germany' },

    ]

    const debouncedsetSearch = useCallback(
        debounce(setSearch, 500), 
    []);
    
    return (
        <MainLayout>
            <Helmet>
                <title>SHOPPE | Shop</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto py-16 px-4 md:py-24">
                <div className="flex mb-10">
                    <h1 className="md:text-heading1 text-heading4 font-medium text-black">
                        Shop The Latest
                    </h1>
                </div>

                <div className="md:flex justify-between">
                    <div className="max-w-[262px] w-full mr-9 mb-8 md:mb-0"> 
                        <div className="flex items-center justify-between py-2 px-1 border-b border-light-gray mb-10">
                            <input 
                                type="text" 
                                className="w-full text-bodyMedium text-dark-gray outline-none" 
                                placeholder="Search..." 
                                onChange={event => debouncedsetSearch(event.target.value)}
                                required 
                            />
                            <img src={SearchIcon}/>
                        </div>
                        <div className="mb-4">
                            <Select option={options1}  />
                        </div>
                        <div className="mb-10">
                            <Select option={options2} />
                        </div>
                        <div className="mb-10">
                            <div className="relative">
                                <input
                                    type="range"
                                    className="w-full h-6 p-0 bg-light-gray accent-dark-gray focus:outline-none  focus:ring-0 focus:shadow-none outline-none"
                                    id="customRange2"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-bodyMedium text-dark-gray font-normal">
                                    Price: $40 - $180
                                </span>
                                <button className="text-bodyMedium text-accent font-normal hover:text-black">
                                    Filter
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-between mb-10">
                            <h4>
                                On sale
                            </h4>
                            <Switch toggle={"toggle1"}/>
                        </div>
                        <div className="flex justify-between">
                            <h4>
                                In stock
                            </h4>
                           <Switch toggle={"toggle2"}/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                        products.filter(product => {
                            if (search === '') {
                              return product;
                            } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
                              return product;
                            }
                          }).map((product, i) => (
                            <NavLink to={`/product/${product.id}`} key={i}>
                                <ProductCard product={product}/>
                            </NavLink>
                        ))
                    }
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}