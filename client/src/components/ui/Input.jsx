export default function Input({
    placeholder,
    type,
    pb,
    valueName,
    value,
    changeHandler,
}) {
    return (
        <input
            type={type}
            name={valueName}
            value={value}
            onChange={changeHandler}
            id={valueName}
            className={`bg-white text-main-text-color placeholder-gray-400 placeholder:text-sm block w-full p-2.5 ${pb}`}
            placeholder={placeholder}
        />
    );
}
