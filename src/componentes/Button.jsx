export default function Button({bgColor, navbar, ...rest}){
    return (
        <button {...rest}
                className={"rounded-md shadow p-2 flex gap-2 items-center justify-center hover:bg-opacity-80 border-0 text-white color-white bg-black"}
        />
    )
}