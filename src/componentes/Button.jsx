export default function Button({bgColor, destaque, ...rest}){
    let Class;
    if (destaque){
        Class = "rounded-md shadow p-1 flex gap-2 items-center justify-center bg-opacity-50 border-0 text-white color-white bg-black"
    }else {
        Class = "rounded-md shadow p-1 flex gap-2 items-center justify-center hover:bg-opacity-50 border-0 text-white color-white bg-black"
    }
    return (
        <button {...rest}
                className={Class}
        />
    )
}