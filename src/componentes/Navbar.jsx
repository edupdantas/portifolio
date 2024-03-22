import Button from "@/componentes/Button";

export default function Navbar(){
    return(
        <nav className="flex md:flex-row flex-col gap-2 items-between justify-between p-2 border-b-2 mb-4 shadow-xl bg-green-700 sm:w-full sm:flex sm:justify-center">
            <div className="container md:flex-row flex-col flex justify-between items-between ml-2 mr-0 w-full">
                <h1 className="text-xl ">PORTIFÓLIO PROFISSIONAL</h1>
                <ul className="flex md:flex-row flex-col gap-1">
                    <div className="flex flex-row space-x-1 pb-1">
                        <li className="text-white">
                            <a href="/">
                                <Button>Sobre mim</Button>
                            </a>
                        </li>

                        <li className="text-white">
                            <a href="/projetos"
                               className="text-white hover:bg-gray-100 hover:text-gray-800 w-1/2 sm:w-auto">
                                <Button>Projetos</Button>
                            </a>
                        </li>
                    </div>
                    <div className="flex flex-row space-x-1">
                        <li className="text-white">
                            <a href="/formacao" className="w-1/2 sm:w-auto">
                                <Button>Formação</Button>
                            </a>
                        </li>

                        <li className="text-white">
                            <a href="/habilidades" className="w-1/2 sm:w-auto">
                                <Button>Contato</Button>
                            </a>
                        </li>
                        <li className="text-white">
                            <a href="/habilidades" className="w-1/2 sm:w-auto">
                                <Button>Experiências</Button>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}