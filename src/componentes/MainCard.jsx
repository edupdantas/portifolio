import Footer from "@/componentes/Footer";
import Navbar from "@/componentes/Navbar";

export default function MainCard({children}){
    return (
        <>
            <Navbar/>
            <main className="flex min-h-screen md:flex-row flex-col justify-center items-center pt-5 gap">
                {children}
            </main>
            <Footer/>
        </>

    )
}