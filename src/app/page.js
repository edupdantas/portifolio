import MainCard from "@/componentes/MainCard";
import Navbar from "@/componentes/Navbar";
import {Inter} from "next/font/google";
import Footer from "@/componentes/Footer";

export default function Home() {
    return (
        <MainCard>
            <div className="flex justify-center items-start h-screen">
                <img src="profile.png" className="mx-24 w-full min-w-[360px] h-[70%] object-cover rounded-lg"/>
            </div>
            <div className="flex flex-col justify-start items-center h-screen mx-24">
                <h1 className="text-4xl font-bold text-center items-center mb-8">HI, I'M EDUARDO!</h1>
                <p className="text-base text-center mb-2 max-w-[600px] min-w-[360px]">Atualmente estou cursando bacharelado em Ciência da Computação pela
                    Universidade Estadual da Paraíba.</p>
                <p className="text-base text-center mb-2 max-w-[600px] min-w-[360px]">Tenho cinco anos de experiência institucional com
                    linguagens de programação, incluindo JavaScript, Python, Java, C++ e C. Também tenho experiência em
                    Gerenciamento de Banco de Dados em SQL, Escrita Web (HTML) e gerenciamento de Redes de
                    Computadores.</p>
                <p className="text-base text-center mb-2 max-w-[600px] min-w-[360px]">Concluí também um curso de 20 horas em ReactJS pela Udemy
                    com instrução do professor Matheus Fraga, tendo experiência em diversos projetos com JavaScript e
                    React.</p>
                <p className="text-base text-center mb-2 max-w-[600px] min-w-[360px]">Possuo experiência moderada com sistemas de Cloud Computing, trabalhando em um projeto que roda através do Heroku e Vercel.</p>
            </div>
        </MainCard>
    );
}
