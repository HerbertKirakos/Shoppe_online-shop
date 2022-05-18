import { NavLink } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { useCallback, useState } from "react";
import Helmet from "react-helmet";
import debounce from "lodash.debounce";
import { BlogCard, posts } from "../components/BlogCard";

import SearchIcon from "../assets/svg/SearchIcon.svg";

export const BlogPage = () => {
    const [search, setSearch] = useState('')

    const debouncedsetSearch = useCallback(
        debounce(setSearch, 500), 
    []);
    
    return (
        <MainLayout>
            <Helmet>
                <title> SHOPPE | Blog </title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto py-16 px-4 md:py-24">
                <div className="flex mb-10">
                    <h1 className="md:text-heading1 text-heading4 font-medium text-black">
                        Blog
                    </h1>
                </div>

                <div className="md:flex justify-between mb-16">
                    <div className="max-w-[262px] w-full md:mr-9 md:mb-0 mb-12"> 
                        <div className="hidden md:flex items-center justify-between py-2 px-1 border-b border-light-gray mb-16">
                            <input 
                                type="text" 
                                className="w-full text-bodyMedium text-dark-gray outline-none" 
                                placeholder="Search..." 
                                onChange={event => debouncedsetSearch(event.target.value)}
                                required 
                            />
                            <img src={SearchIcon}/>
                        </div>
                        <div>
                            <h3 className="text-heading3 text-black font-medium mb-6">
                                Categories
                            </h3>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    <NavLink to="/blog" className="text-dark-gray text-bodyLarge hover:text-black cursor-pointer">
                                        Fashion
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" className="text-dark-gray text-bodyLarge hover:text-black cursor-pointer">
                                        Style
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" className="text-dark-gray text-bodyLarge hover:text-black cursor-pointer">
                                        Accessories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" className="text-dark-gray text-bodyLarge hover:text-black cursor-pointer">
                                        Season
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                        { 
                            posts.filter(post => {
                                if (search === '') {
                                return post;
                                } else if (post.name.toLowerCase().includes(search.toLowerCase())) {
                                return post;
                                }
                            }).map((post, i) => (
                                <div key={i}>
                                    <BlogCard post={post} />
                                    <NavLink to={`/post/${post.id}`}>
                                        <span className="text-bodyLarge text-accent font-bold cursor-pointer" >
                                            Read More
                                        </span>
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div className="flex justify-end">
                    <ul className="inline-flex items-center gap-2">
                        <li>
                            <NavLink to="/blog" className="block py-3 px-3 leading-tight text-black bg-white rounded border border-gray hover:bg-black hover:text-white">
                                <span className="sr-only">Previous</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="py-3 px-3 leading-tight text-black bg-white border border-gray hover:bg-black hover:text-white">1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="py-3 px-3 leading-tight text-black bg-white border border-gray hover:bg-black hover:text-white">2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className="block py-3 px-3 leading-tight text-black bg-white rounded border border-gray hover:bg-black hover:text-white">
                                <span className="sr-only">Next</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </MainLayout>
    )
}