import { MainLayout } from "../layouts/MainLayout";
import Helmet from "react-helmet";
import { useParams } from "react-router-dom";
import { posts } from "../components/BlogCard";

import Image04 from "../assets/img/Image04.png";

export const PostPage = () => {
    const params = useParams();
    const post = posts.filter(e => e.id === +params.id)

    return (
        <MainLayout>
            <Helmet>
                <title>SHOPPE | Post</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto flex flex-col items-center py-16 px-4 md:py-24">
                <div className="mb-10">
                    <h1 className="text-heading1 text-black text-center font-semibold mb-4">
                        Fast Fashion, And Faster Fashion
                    </h1>
                    <p className="text-bodyLarge text-black text-center font-normal"> 
                        by ANNY JOHNSON - October 8,2020
                    </p>
                </div>

                <div className="mb-16">
                    <img src={post[0]?.imageSrc}/>
                </div>

                <div className="max-w-2xl flex flex-col items-center">
                    <div className="mb-14">
                        <p className="text-bodyLarge text-black font-normal mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. 
                            Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. 
                        </p>
                        <p className="text-bodyLarge text-black font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
                            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. 
                        </p>
                    </div>
                    
                    <div>
                        <div className="mb-12 ">
                            <img src={Image04}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-heading2 text-black font-medium mb-6">
                                Top trends
                            </h2>
                            <p className="text-bodyLarge text-black mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, 
                                augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
                            </p>
                            <span className="text-bodyMedium text-black font-normal">
                                ● Consectetur adipiscing elit. Aliquam placerat
                            </span>
                            <span className="text-bodyMedium text-black font-normal">
                                ● Lorem ipsum dolor sit amet consectetur 
                            </span>
                            <span className="text-bodyMedium text-black font-normal">
                                ● Sapien tortor faucibus augue
                            </span>
                            <span className="text-bodyMedium text-black font-normal">
                                ●  A maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}