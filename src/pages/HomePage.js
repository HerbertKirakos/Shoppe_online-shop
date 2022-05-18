import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import { MainLayout } from "../layouts/MainLayout";
import { Carousel, CarouselItem } from "../components/Carousel";
import { ProductCard } from "../components/ProductCard";
import { products } from "../MOCK";

import BannerImg01 from "../assets/img/BannerImg01.png";
import BannerImg02 from "../assets/img/BannerImg02.png";
import BannerImg03 from "../assets/img/BannerImg03.png";
import BannerImg04 from "../assets/img/BannerImg04.png";
import BannerImg05 from "../assets/img/BannerImg05.png";

export const HomePage = () => {
    
    return (
        <MainLayout>
            <Helmet>
                <title>SHOPPE | Home</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto mb-8 px-4">
                <Carousel>
                    <CarouselItem>
                        <img src={BannerImg01}/>
                    </CarouselItem>
                    <CarouselItem>
                        <img src={BannerImg02}/>
                    </CarouselItem>
                    <CarouselItem>
                        <img src={BannerImg03}/>
                    </CarouselItem>
                    <CarouselItem>
                        <img src={BannerImg04}/>
                    </CarouselItem>
                    <CarouselItem>
                        <img src={BannerImg05}/>
                    </CarouselItem>
                </Carousel>
            </div>
                
            <div className="max-w-screen-xl mx-auto py-8 px-4 md:py-24 lg:max-w-7xl">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="md:text-heading1 text-heading4 font-medium text-black">
                        Shop The Latest
                    </h1>
                    <NavLink to="/shop" className="md:text-heading3 text-bodyMedium font-medium text-accent hover:text-black">
                        View All
                    </NavLink>
                </div>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                        products.map((product, i) => (
                            <NavLink to={`product/${product.id}`} key={i}>
                                <ProductCard product={product}/>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </MainLayout>
    )
}
