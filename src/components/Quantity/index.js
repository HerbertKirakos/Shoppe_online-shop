export const Quantity = ({value, setValue}) => {

    const handlePlus = () => {
        setValue(+value + 1);
    };

    const handleMinus = () => {
        if(value > 0) {
            setValue(+value - 1);
        } 
    };

    return (
            <div className="md:px-4 px-2 md:py-3 py-1.5 bg-light-gray flex items-center gap-2 max-w-[102px]">
                <button className="md:text-heading3 text-bodySmall font-normal text-center text-dark-gray p-0.5" onClick={handleMinus}>
                    -
                </button>
                <input  
                    name="quantity" 
                    value={value} 
                    className="max-w-[28px] md:text-heading4 text-bodySmall font-normal bg-light-gray text-dark-gray outline-none text-center"  
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="md:text-heading3 text-bodySmall text-center text-dark-gray p-0.5" onClick={handlePlus}>
                    +
                </button>
            </div>

    );
}



