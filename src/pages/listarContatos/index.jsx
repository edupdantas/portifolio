import MainCard from "@/componentes/MainCard";
import "@/app/globals.css";
import React, {useEffect, useState} from "react";

export default function ListarContatos(){

    const [arrJSON, setArrJSON] = useState('');
    let arrJS= [];

    useEffect(() => {
        // Perform localStorage action
        setArrJSON(localStorage.getItem("array"))
    }, [])

    const Lista = () => {
        if(arrJSON){
            arrJS = JSON.parse(arrJSON)
        }

        return(
            arrJS.map((content)=>{
                return (
                    <div
                        className="flex md:flex-row flex-col justify-start items-center gap-5 border-2 w-full border-gray-900 rounded-xl p-2">
                        <label>{content.nome}</label>
                        <label>{content.email}</label>
                    </div>
                )
            })
        )
    }

    function LimparLista(){
        localStorage.setItem("array",JSON.stringify([]))
        setArrJSON(localStorage.getItem("array"))

    }

    return (
        <MainCard destaque={"listarContatos"}>
            <div className="flex flex-col justify-start items-center gap-3 ">

                <h5>Esses são todos os formulários de contatos feitos</h5>
                <Lista/>
                <button
                    onClick={LimparLista}
                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button">
                    Limpar lista
                </button>




            </div>

        </MainCard>
    )
}