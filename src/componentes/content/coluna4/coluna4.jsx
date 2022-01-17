import React from "react";
import { useSelector } from "react-redux";
import './coluna4.css';
import { Link } from "react-router-dom";
export const Coluna4 = () => {
   const data = useSelector(state => state.post)
   const idsexcluidos = useSelector(state => state.excluir)

   const data1 = data.filter(function (el) {
      return el
   })


   function toDate(dateStr) {
      var parts = dateStr.split("/");

      return new Date(parts[2], parts[1] - 1, parts[0]);
   }



   data1.sort(function compare(a, b) {
      const dateeA = new Date(toDate(a.data));
      const dateeB = new Date(toDate(b.data));
      return dateeA - dateeB;
   })




   const newdata = data1.slice(-11, -9)






   return (
      <div className='coluna1'>

         <div className='noticia1'>

         <Link className="link" to={`post/${newdata[0].id}`}>   <div className='cp22' style={{
               width: '100%',
               minHeight: '360px',
               backgroundImage: `url(${newdata[0].imagem})`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover'
            }}>
               <div className='textoetitulocards'>

                  <div>
                     <h4>{newdata[0].titulo.substr(0,20)}</h4>
                     <p>{newdata[0].conteudo.substr(0,30)}</p>
                  </div>
               </div>
            </div></Link>



            
         </div>
         <div className='noticia2'>
              <Link className="link" to={`post/${newdata[1].id}`}><div className='cp22' style={{
               width: '100%',
               minHeight: '360px',
               backgroundImage: `url(${newdata[1].imagem})`,
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover'
            }}>
               <div className='textoetitulocards'>

                  <div>
                     <h4>{newdata[1].titulo.substr(0,20)}</h4>
                     <p>{newdata[1].conteudo.substr(0,30)}</p>
                  </div>
               </div>
            </div></Link>
         </div>
      </div>
   )
}