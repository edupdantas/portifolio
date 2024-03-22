export default function Button({bgColor, destaque, ...rest}){
    let Class;
    if (destaque){
        Class = "rounded-md shadow p-2 flex gap-2 items-center justify-center bg-gray-800 border-0 text-white color-white"
    }else {
        Class = "rounded-md shadow p-2 flex gap-2 items-center justify-center hover:bg-opacity-50 border-0 text-white color-white bg-black"
    }
    return (
        <button {...rest}
                className={Class}
        />
    )
}