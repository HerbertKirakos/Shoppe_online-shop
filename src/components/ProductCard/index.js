
export const ProductCard = ({product}) => {

    return (
        <div key={product.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 mb-6">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                />
            </div>
            <div className="flex justify-between">
                <div>
                    <h3 className="text-heading3 text-black font-normal mb-4">
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {product.name}
                    </h3>
                    <h3 className="text-heading3 font-medium text-accent">
                        {product.price}
                    </h3>
                </div>
            </div>
        </div>

    );
}