import MainCard from "@/componentes/MainCard";
import "@/app/globals.css";
import {Dialog} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {CustomDialog} from "@/componentes/CustomDialog";
import {useState} from "react";

export default function DialogCss({open,close}){
    return(
            <CustomDialog open={open} close={close} title={"CSS"}>
                <div className="flex flex-row gap-3 pt-5 container justify-between items-start gap-7">
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-1 items-start justify-start">
                            <a href="https://www.w3schools.com/css/" target="_blank" className="text-lg font-bold">Descrição</a>
                            <p className="max-w-[300px]">
                                CSS (Cascading Style Sheets) é uma linguagem de estilo usada para definir a apresentação
                                e o layout de documentos HTML. Ele separa o conteúdo da aparência de uma página da web,
                                permitindo o controle preciso sobre elementos individuais ou grupos de elementos.
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-lg font-bold">Qualidades</label>
                            <ul>
                                <li>Flexibilidade</li>
                                <li>Reutilização de Código</li>
                                <li>Facilidade de Manutenção</li>
                            </ul>
                            <label className="text-lg font-bold">Limitações</label>
                            <ul title="Limitações">
                                <li>Incompatibilidade entre Navegadores</li>
                                <li>Curva de Aprendizado</li>
                                <li>Baixo Desempenho</li>
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