import Button from "@/componentes/Button";
export default function Navbar(){

    return(
        <div>
            <nav className="flex flex-row gap-2 itens-center justify-center p-2 border-b-2 mb-4 shadow-xl ">
                <div className="container mx-auto flex justify-between items-center ml-2 mr-0">
                    <div>
                        {/*<img src={logo} width={"150px"} alt={"Logo"}/>*/}
                    </div>
                    <ul className="flex space-x-1">
                        <li className="text-white">
                            <a href="/">
                                <Button> <i className={"pi pi-home"}></i> Home</Button>
                            </a>

                        </li>

                        <li className="text-white">
                            <Button> <i className={"pi pi-users"}/>
                                Clientes</Button>
                        </li>
                        <li className="text-white">
                            <Button><i className={"pi pi-inbox"}/>
                                Itens</Button></li>

                        <li className="text-white">
                            <Button title="Enviar Mensagem">
                                <i className='pi pi-send'></i>
                                Enviar mensagem
                            </Button>
                        </li>
                        <li className="text-white">
                            <Button title="Sair">
                                <i className='pi pi-times'></i>
                                Sair
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}