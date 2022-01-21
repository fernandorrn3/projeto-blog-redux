import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './cards.css'
export const Cards = (props)=>{
    const posts = useSelector(state => state.post)
    console.log(posts)

    const imgStyle = {
        width:'100%',
        height:'100%',
        objectFit: 'cover'
        
       
    }

   
     
return(
    <div className="cardscontent">

    <div className="cardimg">
        <img src={`${ process.env.PUBLIC_URL + '/' + props.imagem}`} style={imgStyle}/>
        </div>
    <div className="infoscards">
        <div><FontAwesomeIcon icon={faUser} /><span>{props.usuario}</span></div>
       <div><FontAwesomeIcon icon={faClock} /><span>{props.data}</span></div> 
        </div>
    <div className="conteudocard"><p>{props.conteudo}</p></div>
    </div>
    
)
}