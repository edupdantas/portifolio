import MainCard from "@/componentes/MainCard";
import "@/app/globals.css";


export default function Formacao(){
    return(
        <MainCard>

            <div className="flex flex-col justify-start items-center gap-5 h-screen mx-24">
                <div className="flex md:flex-row flex-col justify-start items-center gap-5">
                    <img src="uepb.png" className="md:max-w-[200px] max-w-[100px] rounded-xl"/><p
                    className="text-base md:text-xl md:text-start text-center mb-2 max-w-[400px] min-w-[320px]">Atualmente estou cursando
                    bacharelado
                    em Ciência da Computação pela
                    Universidade Estadual da Paraíba.</p>
                </div>
                <div className="flex md:flex-row flex-col justify-start items-center gap-5">
                    <img src="ifpb.png" className="md:max-w-[200px] max-w-[100px] md:min-h-[200px] min-h-[100px] object-cover rounded-xl"/><p
                    className="text-base md:text-xl mb-2 md:text-start text-center max-w-[400px] min-w-[360px]">Fiz o meu ensino médio junto com um técnico em Informática pelo Instituto Federal da Paraíba.</p>
                </div>
                <div className="flex md:flex-row flex-col justify-start items-center gap-5">
                    <img src="react.png" className="md:max-w-[200px] max-w-[100px] rounded-xl"/><p
                    className="text-base md:text-xl mb-2 max-w-[400px] md:text-start text-center min-w-[360px]">Completei o curso de ReactJS do Básico ao Avançado pela Udemy com o professor Matheus Fraga de aproximadamente 20h.</p>
                </div>
            </div>
        </MainCard>
    )
}