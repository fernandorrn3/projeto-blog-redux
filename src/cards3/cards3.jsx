import React from "react";
import './cards3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export const Cards3 = (props) => {

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        webkitBorderRadius: '10px 10px 10px 10px',
        mozBorderRadius: '10px 10px 10px 10px',
        borderRadius: '10px 10px 10px 10px'


    }

    return (
        <div className="contentcard3">
            <div className="imgcard3">
            <Link className="links" to={'/post/'  + props.id}> 
            <img src={`${process.env.PUBLIC_URL + '/' + props.imagem}`} style={imgStyle} />
            </Link>
            </div>
            <div className="conteudocard3">

                <div className="categoriacard3">
                    <div><p><b>{props.categoria}</b></p></div>
                </div>

                <div className="titulocard3">
                    <div><p>{props.titulo}</p></div>
                    <div><p>{props.conteudo}</p></div>
                </div>
                <div className="infocards3">
                <div><FontAwesomeIcon icon={faUser} /><span>{props.autor}</span></div>
       <div><FontAwesomeIcon icon={faClock} /><span>{props.data}</span></div> 
                   
                </div>
            </div>
        </div>
    )
}