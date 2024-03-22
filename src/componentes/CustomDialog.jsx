import {Dialog} from "primereact/dialog";
import "@/app/globals.css"

export const CustomDialog = ({title, open, close, children, ...rest}) => {
    return (
        <Dialog
            {...rest}
            className={"bg-gray-900 shadow p-6 rounded "}
            pt={{
                header: "text-xl font-semibold ",
                closeButton: "p-2 rounded-full hover:bg-primary bg-opacity-50",
                content:"flex flex-1 w-full mb-2",
                mask: "bg-black bg-opacity-50"
            }}
            header={title}
            visible={open}
            style={{minWidth: '30vw'}}
            onHide={close}>
            {children}
        </Dialog>
    )
}

