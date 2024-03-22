import MainCard from "@/componentes/MainCard";
import "@/app/globals.css";
import {Dialog} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {CustomDialog} from "@/componentes/CustomDialog";
import {useState} from "react";

export default function DialogReact({open,close}){
    return(
        <CustomDialog open={open} close={close} title={"ReactJs"}>
            <div className="flex flex-row gap-3 pt-5 container justify-between items-start gap-7">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-1 items-start justify-start">
                        <a href="https://react.dev/" target="_blank"
                           className="text-lg font-bold">Descrição</a>
                        <p className="max-w-[300px]">ReactJS é uma biblioteca JavaScript de código aberto, mantida pelo
                            Facebook e pela comunidade de desenvolvedores, que é amplamente utilizada para construir
                            interfaces de usuário (UI) interativas e reativas.</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-lg font-bold">Qualidades</label>
                        <ul>
                            <li>Componentização</li>
                            <li>Virtual DOM</li>
                            <li>Ecosistema robusto</li>
                        </ul>
                        <label className="text-lg font-bold">Limitações</label>
                        <ul>
                            <li>Curva de Aprendizado</li>
                            <li>Documentação Fragmentada</li>
                            <li>Desempenho em Aplicações Grandes</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <label className="text-lg font-bold">Projetos</label>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>WhatsApp Web</li>
                            <li>Airbnb</li>
                            <li>Dropbox</li>
                            <li>Netflix</li>
                        </ul>
                    </div>
                </div>
            </div>
        </CustomDialog>
    )
}