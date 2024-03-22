import MainCard from "@/componentes/MainCard";
import "@/app/globals.css";
import {Dialog} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {CustomDialog} from "@/componentes/CustomDialog";
import {useState} from "react";

export default function DialogHtml({open,close}){
    return(
        <CustomDialog open={open} close={close} title={"HTML"}>
            <div className="flex flex-row gap-3 pt-5 container justify-between items-start gap-7">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 items-start justify-start">
                        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"
                           className="text-lg font-bold">Descrição</a>
                        <p className="max-w-[300px]">HTML (Hypertext Markup Language) é a linguagem padrão para a
                            criação e estruturação de páginas web. Utilizando uma série de tags e elementos, HTML
                            permite a formatação de conteúdo, incluindo texto, imagens, vídeos e links, para que possa
                            ser exibido de forma consistente em diferentes navegadores da web.</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-bold">Qualidades</label>
                        <ul>
                            <li>Universalidade</li>
                            <li>Flexibilidade</li>
                            <li>Facilidade de Aprendizado</li>
                        </ul>
                        <label className="text-lg font-bold">Limitações</label>
                        <ul title="Limitações">
                        <li>Interatividade</li>
                            <li>Estilo</li>
                            <li>Compatibilidade de Navegador</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <label className="text-lg font-bold">Projetos</label>
                        <ul>
                            <li>Google</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Amazon</li>
                            <li>Netflix</li>
                            <li>GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </CustomDialog>
    )
}