import React from "react";
import './coluna2.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export const Coluna2 = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.post)
    const social = useSelector(state => state.excluir)
 



    const filtrar = data.filter(function (elemento) {
        return elemento
     })

     function toDate(dateStr) {
        var parts = dateStr.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
  
     filtrar.sort(function compare(a, b) {
        const dateeA = new Date(toDate(a.data));
        const dateeB = new Date(toDate(b.data));
        return dateeA - dateeB;
     })

     const newDate = filtrar.slice(-3,-2)
  
   

    

    
    



return (
    
    <div className='coluna2'>
   
       <Link className="link" to={`/post/${newDate[0].id}`}>  <div className='noticia22' style={{

            backgroundImage: "url("+ process.env.PUBLIC_URL + '/' + newDate[0].imagem+")",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            minHeight: '380px',
        }}>
          <div className='textoetitulocards'>
                 <div>
                    <h4>{newDate[0].titulo.substr(0,20)}</h4>
                    <p>{newDate[0].conteudo.substr(0,30)}</p>
                    </div> 
                 
               </div>

            
        </div></Link>
        
    </div>


)

    




}