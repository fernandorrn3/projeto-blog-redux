import React from "react";
import './cards3.css'


export const Cards3 = (props) => {

    const imgStyle = {
        width: '100%',
        height: '100%'


    }

    return (
        <div className="contentcard3">
            <div className="imgcard3">
                <img src={`${process.env.PUBLIC_URL + '/' + props.imagem}`} style={imgStyle} />
            </div>
            <div className="conteudocard3">
                <div className="categoriacard3">
                    <p>{props.categoria}</p>
                </div>

                <div  className="titulocard3">
                    <div><p>{props.titulo}</p></div>
                    <div><p>{props.conteudo}</p></div>
                </div>
                <div className="infocards3">
                    <div><p>{props.autor}</p></div>
                    <div><p>{props.data}</p></div>
                </div>
            </div>
        </div>
    )
}