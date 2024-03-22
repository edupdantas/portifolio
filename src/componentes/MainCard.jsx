import Footer from "@/componentes/Footer";
import Navbar from "@/componentes/Navbar";

export default function MainCard({children,destaque}){
    return (
        <>
            <Navbar destaque={destaque}/>
            <main className="flex min-h-screen md:flex-row flex-col justify-center items-center pt-5 gap">
                {children}
            </main>
            <Footer/>
        </>

    )
}