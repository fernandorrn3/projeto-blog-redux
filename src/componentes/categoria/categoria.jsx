import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Navecagao } from "../navbar/navegacao";
import {Footer} from '../footer/footer'
import './categoria.css'
import './cardcategoria.css'

export const Categoria = () => {
    let params = useParams();
    console.log(params.categoria)


    const post = useSelector(state => state.post)

    const postsCategoria = post.filter(function (item) {
        return item.categoria == params.categoria
    })






    return (
        <div className="categoriasesao">
            <Navecagao />
            <div className="contentcategoria">
                <div className="postcategorias">
                    {postsCategoria.map(item => (
                        <Cardcategoria image={item.imagem} conteudo={item.conteudo} titulo={item.titulo} data={item.data} />
                    ))}

                </div>

            </div>
            <Footer/>
        </div>

    )
}


const Cardcategoria = (props) => {
    return (
        <div className="cardcategoria">
            <div className="titulocardcat"><h1>{props.titulo}</h1></div>
            <div className="infoscardcat"><p>{props.data}</p></div>
            <div className="corpocardcat">
                <div className="corpoimgcard">

                    <div  className="imgcard" style={{
                        height: '260px',
                        width: '400px',
                        backgroundImage: `url(${props.image})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'

                    }}>

                    </div>
                </div>
                <div className="corpocard">
                    <p>{props.conteudo}</p>
                    </div>
            </div>
        </div>
    )
}