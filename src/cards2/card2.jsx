import React from 'react'
import './card2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const Card2 = (props) =>{

    const imgStyle = {
        width:'100%',
        height:'100%',
        objectFit: 'cover',
        webkitBorderRadius: '10px 10px 10px 10px',
        mozBorderRadius: '10px 10px 10px 10px',
        borderRadius: '10px 10px 10px 10px'
        
       
    }


return(
    <div className='cards2'>
<div className='contentimgcard2'>
    <div>
        
    <Link className="links" to={'/post/'  + props.id}> 
    <img src={`${process.env.PUBLIC_URL + '/' + props.imagem}`} style={imgStyle}/> 
    </Link> 
        </div>

     

    <div className='noticiaimagemcima'>
        <div>
        <FontAwesomeIcon icon={faUser} /><span><b>{props.autor}</b></span>
            
            </div>
        <div>
        <FontAwesomeIcon icon={faClock} /><span><b>{props.data}</b></span>
            </div>
    </div>
    <div className='noticiaimagembaixo'>
        <div><span><b>{props.categoria}</b></span></div>
        <div><h2>{props.titulo}</h2></div>
        </div>

    
    
    
    </div>
   
    </div>
)
}