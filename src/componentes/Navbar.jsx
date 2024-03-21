import Button from "@/componentes/Button";

export default function Navbar(){
    return(
        <nav className="flex flex-row gap-2 itens-center justify-center p-2 border-b-2 mb-4 shadow-xl bg-green-700">
            <div className="container mx-auto flex justify-between items-center ml-2 mr-0">
                <div>
                    {/*<img src={logo} width={"150px"} alt={"Logo"}/>*/}
                </div>
                <ul className="flex space-x-1">
                    <li className="text-white">
                        <a href="/">
                            <Button>Sobre mim</Button>
                        </a>
                    </li>

                    <li className="text-white">
                        <a href="/projetos">
                            <Button>Projetos</Button>
                        </a>
                    </li>
                    <li className="text-white">
                        <a href="/habilidades">
                            <Button>Habilidades</Button>
                        </a>
                    </li>

                    <li className="text-white">
                        <Button title="Enviar Mensagem">
                            <i className='pi pi-send'></i>
                            Enviar mensagem
                        </Button>
                    </li>
                    <li className="text-white">
                        <Button title="Sair">
                            <i className='pi pi-times'></i>mim
                            Sair
                        </Button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}