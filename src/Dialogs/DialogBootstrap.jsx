import MainCard from "@/componentes/MainCard";
import "@/app/globals.css";
import {Dialog} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {CustomDialog} from "@/componentes/CustomDialog";
import {useState} from "react";

export default function DialogBootstrap({open,close}){
    return(
        <CustomDialog open={open} close={close} title={"Bootstrap"}>
            <div className="flex flex-row gap-3 pt-5 container justify-between items-start gap-7">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 items-start justify-start">
                        <a href="https://getbootstrap.com/" target="_blank" className="text-lg font-bold">Descrição</a>
                        <p className="max-w-[300px]">Bootstrap é um framework de código aberto amplamente utilizado para
                            o desenvolvimento de interfaces de usuário responsivas e móveis. Baseado em HTML, CSS e
                            JavaScript, o Bootstrap oferece uma vasta gama de componentes e estilos predefinidos,
                            facilitando a criação de páginas web modernas e visualmente atraentes.</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-bold">Qualidades</label>
                        <ul>
                            <li>Facilidade de Uso</li>
                            <li>Responsividade</li>
                            <li>Personalização</li>
                        </ul>
                        <label className="text-lg font-bold">Limitações</label>
                        <ul title="Limitações">
                            <li>Padronização Visual</li>
                            <li>Tamanho do Arquivo</li>
                            <li>Curva de Aprendizado</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <label className="text-lg font-bold">Projetos</label>
                        <ul>
                            <li>Twitter</li>
                            <li>Spotify</li>
                            <li>Airbnb</li>
                            <li>Udemy</li>
                            <li>NASA</li>
                            <li>CNN</li>
                        </ul>
                    </div>
                </div>
            </div>
        </CustomDialog>
    )
}