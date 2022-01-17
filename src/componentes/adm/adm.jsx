import React from "react";
import './adm.css'
import { Sidebar } from "./sidebar/sidebar";
import { Conteudoadm } from "./contentadm/contentadm";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, useParams } from "react-router-dom";

export const Adm = () => {


    const [abrir, setabrir] = useState(false)
    const [conteudo, setconteudo] = useState('conteudoadm')
    const [barraadm, setbarraadm] = useState('sidebar')
    const [botao, setbotao] = useState('botao')
    const [menu, setmenu] = useState()

    const abrirbarra = () => {

        { abrir ? setabrir(false) : setabrir(true) }

        if (!abrir) {
            setconteudo('conteudoadm2')
            setbarraadm('sidebaradm2')
            setbotao('botao2')
            console.log(abrir)
        } else {
            setconteudo('conteudoadm')
            setbarraadm('sidebar')
            setbotao('botao')
            console.log(abrir)
        }
    }

    let params = window.location.pathname
let result = params.includes('adm')
    if(!result){
        return(
            <div><h1>rota nao existe</h1></div>
        )
    }
    return (
        <div className="adm">



            <div>
                <Sidebar barraadm={barraadm} />
            </div>
            <div className="conteudobtncontent">
                <div className="botaoabrir">
                    <FontAwesomeIcon className={botao} onClick={abrirbarra} size="2x" icon={faBars}></FontAwesomeIcon>
                </div>
                <Conteudoadm conteudo={conteudo} />
            </div>


        </div>
    )
}


