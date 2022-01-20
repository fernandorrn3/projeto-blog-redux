import React from 'react'
import './card2.css'

export const Card2 = (props) =>{

    const imgStyle = {
        width:'100%',
        height:'100%'
        
       
    }


return(
    <div className='cards2'>
<div className='contentimgcard2'>
    <img src={`${process.env.PUBLIC_URL + '/' + props.imagem}`} style={imgStyle}/> 

    
    </div>
    </div>
)
}