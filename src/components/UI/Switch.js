export const Switch = ({id, toggle}) => {
    return (
        <label htmlFor={toggle} className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" id={toggle} className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dark-gray"></div>
        </label>
    );
}