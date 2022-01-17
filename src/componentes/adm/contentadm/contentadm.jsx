import React from "react";
import { useState } from "react";
import './contentadm.css'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const abrirbarracontent = () =>{
    console.log('ola')
}


export const Conteudoadm = (conteudo) => {

   
        return (


            <div className={conteudo.conteudo}>
          
            <Outlet />
            
            
              
            </div>
        )
 

}


