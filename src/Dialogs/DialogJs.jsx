import MainCard from "@/componentes/MainCard";
import "@/app/globals.css";
import {Dialog} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {CustomDialog} from "@/componentes/CustomDialog";
import {useState} from "react";

export default function DialogJs({open,close}){
    return(
        <CustomDialog open={open} close={close} title={"JavaScript"}>
            <div className="flex flex-row gap-3 pt-5 container justify-between items-start gap-7">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 items-start justify-start">
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"
                           className="text-lg font-bold">Descrição</a>
                        <p className="max-w-[300px]">JavaScript é uma linguagem de programação amplamente utilizada para
                            desenvolvimento web. Originalmente criada para tornar as páginas web interativas, hoje em
                            dia é aplicada em diversos contextos, incluindo o desenvolvimento de aplicativos de servidor
                            e móveis.</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-bold">Qualidades</label>
                        <ul>
                            <li>Versatilidade</li>
                            <li>Facilidade de Aprendizado</li>
                            <li>Ecossistema Rico</li>
                        </ul>
                        <label className="text-lg font-bold">Limitações</label>
                        <ul>
                            <li>Segurança Limitada</li>
                            <li>Desempenho</li>
                            <li>Tipos Fracos</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <label className="text-lg font-bold">Projetos</label>
                        <ul>
                            <li>Facebook</li>
                            <li>Amazon</li>
                            <li>Twitter</li>
                            <li>Google</li>
                            <li>Airbnb</li>
                            <li>Netflix</li>
                        </ul>
                    </div>
                </div>
            </div>
        </CustomDialog>
    )
}