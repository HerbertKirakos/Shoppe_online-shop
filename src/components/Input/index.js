export const Input = ({id, type, placeholder, name, value, onChange, onBlur, className = '', error = undefined, required = false}) => {
    return (
        <div className={` w-full ${ className }`}>
            <input 
                id={id} 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                onBlur={onBlur}
                className={`w-full text-bodyLarge text-dark-gray outline-none border-b border-light-gray`} 
                placeholder={placeholder} 
                required={required}
            />
            {error && <span className="text-bodySmall text-errors">* {error}</span>}
        </div>
    );
}