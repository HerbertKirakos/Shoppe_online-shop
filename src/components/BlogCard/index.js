import { NavLink } from 'react-router-dom';
import BlogImg01 from '../../assets/img/BlogImg01.png';
import BlogImg02 from '../../assets/img/BlogImg02.png';
import BlogImg03 from '../../assets/img/BlogImg03.png';
import BlogImg04 from '../../assets/img/BlogImg04.png';

export const posts = [
    {
        id: 1,
        date: 'Fashion - October 8, 2021',
        name: 'Top Trends From Spring',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...',
        imageSrc: BlogImg01,
        imageAlt: "Top Trends From Spring.",
    },
    {
        id: 2,
        date: 'Fashion - October 4, 2022',
        name: 'Top Trends From Spring',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...',
        imageSrc: BlogImg02,
        imageAlt: "Top Trends From Spring",
    },
    {
        id: 3,
        date: 'Fashion - May 8, 2022',
        name: 'Top Trends From Spring',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...',
        imageSrc: BlogImg03,
        imageAlt: "Top Trends From Spring",
    },
    {
        id: 4,
        date: 'Fashion - Jule 8, 2020',
        name: 'Top Trends From Spring',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...',
        imageSrc: BlogImg04,
        imageAlt: "Top Trends From Spring",
    },
  ]

export const BlogCard = ({post}) => {

    return (
        <div key={post.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 mb-6">
                <img
                    src={post.imageSrc}
                    alt={post.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="flex justify-between">
                <div>
                    <span className="text-bodyMedium text-dark-gray font-normal mb-1.5">
                        {post.date}
                    </span>
                    <h3 className="text-heading3 text-black font-normal mb-4">
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {post.name}
                    </h3>
                    <p className="text-bodyLarge font-medium text-dark-gray mb-6">
                        {post.info}
                    </p>
                </div>
            </div>
        </div>

    );
}