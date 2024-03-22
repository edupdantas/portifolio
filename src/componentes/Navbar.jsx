import Button from "@/componentes/Button";

export default function Navbar({destaque}){
    return(
        <nav className="flex md:flex-row flex-col gap-2 items-between justify-between p-2 py-4 border-b-2 mb-4 shadow-xl bg-gray-900 sm:w-full sm:flex sm:justify-center">
            <div className="container md:flex-row flex-col flex justify-between items-between ml-2 mr-0 w-full gap-5">
                <img src="logo.png" className="object-cover h-[50px] w-96"/>
                <ul className="flex md:flex-row flex-col gap-1">
                    <div className="flex flex-row space-x-1 pb-1">
                        <li className="text-white">
                            <a href="/">
                                <Button destaque={destaque==="home"}>Sobre mim</Button>
                            </a>
                        </li>

                        <li className="text-white">
                            <a href="/projetos"
                               className="text-white hover:bg-gray-100 hover:text-gray-800 w-1/2 sm:w-auto">
                                <Button destaque={destaque==="projetos"}>Projetos</Button>
                            </a>
                        </li>
                    </div>
                    <div className="flex flex-row space-x-1">
                        <li className="text-white">
                            <a href="/formacao" className="w-1/2 sm:w-auto">
                                <Button destaque={destaque==="formacao"}>Formação</Button>
                            </a>
                        </li>

                        <li className="text-white">
                            <a href="/contato" className="w-1/2 sm:w-auto">
                                <Button destaque={destaque==="contato"}>Contato</Button>
                            </a>
                        </li>
                        <li className="text-white">
                            <a href="/experiencias" className="w-1/2 sm:w-auto">
                                <Button destaque={destaque==="experiencias"}>Experiências</Button>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}