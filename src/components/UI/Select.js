export const Select = ({option}) => {
    
    return (
        <select className="bg-white border border-light-gray text-black text-bodyMedium rounded block w-full py-4 px-3 outline-none">
            {
                option.map((item, i) => (
                    <option key={i}>{item.label}</option>
                ))
            }
        </select>
    )
}
