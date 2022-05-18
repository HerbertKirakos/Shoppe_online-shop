import { NavLink } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import Helmet from "react-helmet";

import Image04 from "../assets/img/Image04.png";
import Image05 from "../assets/img/Image05.png";

export const OurStoryPage = () => {
    
    return (
        <MainLayout>
            <Helmet>
                <title>SHOPPE | Our story</title>
            </Helmet>
            <div className="max-w-2xl mx-auto py-16 px-4 md:py-24">
                <div className="flex flex-col items-center mb-12">
                    <h1 className="text-heading1 text-black font-semibold mb-6">
                        About
                    </h1>
                    <h3 className="text-heading3 text-black font-normal text-center mb-10">
                        Who we are and why we do what we do! 
                    </h3>
                    <p className="text-bodyLarge text-black font-normal "> 
                        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. 
                        Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, 
                        placerat urna. Curabitur eu mag na enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. 
                    </p>
                </div>
               
                <div className="mb-10">
                    <h2 className="text-heading2 text-black font-normal mb-6">
                        Top trends
                    </h2> 
                    <div className="mb-12">
                        <img src={Image04}/>
                    </div>
                    <p className="text-bodyLarge text-black font-normal mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, 
                        sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
                    </p>
                    <div className="flex flex-col gap-2">
                        <span className="text-bodyLarge text-black font-normal">
                            ● Consectetur adipiscing elit. Aliquam placerat
                        </span>
                        <span className="text-bodyLarge text-black font-normal">
                            ● Lorem ipsum dolor sit amet consectetur 
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className="text-heading2 text-black font-normal mb-6">
                        Produced with care
                    </h2> 
                    <div className="mb-12">
                        <img src={Image05}/>
                    </div>
                    <p className="text-bodyLarge text-black font-normal mb-4">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, 
                       a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, 
                       in molestie diam bibendu.
                    </p>
                </div>
            </div>
        </MainLayout>
    )
}