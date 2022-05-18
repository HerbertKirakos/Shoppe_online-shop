import classNames from "classnames"

export const Button = ({title, outlined = true, danger = false, onClick, type = 'button', className = '', disabled = false}) => {
    const outlinedClasses = classNames('text-black', 'border-black', 'bg-white', 'hover:text-white', 'hover:bg-black');

    const primaryClasses = classNames('text-white', 'border-black', 'bg-black', ' hover:text-black', 'hover:bg-white');

    const dangerClasses = classNames('text-errors', 'border-errors', 'bg-white', 'hover:text-white', 'hover:bg-errors');

    return (
        <button 
            type={type} 
            className={`py-3 px-6 text-bodyLarge w-full font-bold text-center whitespace-nowrap  border rounded-md duration-300 disabled:bg-opacity-30 ${danger && dangerClasses} ${outlined ? outlinedClasses : primaryClasses} ${className}`} 
            onClick={onClick}
            disabled={disabled}
        >
           {title}
        </button>
    )
}