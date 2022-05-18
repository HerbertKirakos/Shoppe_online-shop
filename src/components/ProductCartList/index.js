import { useDispatch, useSelector } from "react-redux";
import { Quantity } from "../../components/Quantity";
import { removeCartItem, setCountToItem } from "../../store/cartSlice";

import RemoveIcon from "../../assets/svg/RemoveIcon.svg";

export const ProductCartList = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleProductItemChange = (itemId, newCount) => {
        dispatch(setCountToItem({
            itemId: itemId,
            newCount: newCount
        }))

    }
    
    return (
        <div>
            {
                cartItems && cartItems.length > 0 &&
                cartItems.map(item => (
                    <div className="border-b border-b-gray mb-10" key={item.id}>
                        <div className="flex justify-between mb-10">
                            <div className="md:mr-10 mr-2 max-w-[136px] ">
                                <img src={item.image} />
                            </div>
                            <div className="md:flex">
                                <div className="flex flex-col md:mr-28 mr-12 md:mb-0 mb-8">
                                    <h3 className="md:text-heading3 text-bodySmall  text-black font-medium md:mb-3.5 mb-1">
                                        {item.name}
                                    </h3>
                                    <span className="md:text-bodyLarge text-bodySmall text-dark-gray font-medium mb-1 whitespace-nowrap">
                                        Black / Medium
                                    </span>
                                    <span className="md:text-bodyLarge text-bodySmall text-accent font-normal">
                                    $ {(item.count * parseInt(item.price)).toFixed(1)}
                                    </span>
                                </div>
                                <div className="mr-12">
                                    <Quantity value={item.count} setValue={(newCount) => handleProductItemChange(item.id, newCount)}/>
                                </div>
                            </div>
                            <button className="flex justify-start" onClick={() => dispatch(removeCartItem(item.id))}>
                                <img src={RemoveIcon}/>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
} 