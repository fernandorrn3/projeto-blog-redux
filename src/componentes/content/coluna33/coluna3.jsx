import React from "react";
import './coluna3.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export const Coluna3 = () => {
    const dispatch = useDispatch()


    const data = useSelector(state => state.post)
    const soci = useSelector(state => state.excluir)




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

    const newdate = filtrar.slice(-9, -3)
    const newdate1 = newdate.slice(-3)
    const newdate2 = newdate.slice(-6, -3)













    const coluna1 = newdate1.map(item => (
       <div className="columnnoticia3">

   <Link className="link" to={`/post/${item.id}`}>  <div className='noticiacol3' style={{
                width: '100%',
                minHeight: '255px',
                backgroundImage: "url(" + item.imagem + ")",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end'
            }}>
                <div className='textoetitulocards'>

                    <div>
                        <h4>{item.titulo.substr(0,20)}</h4>
                        <p>{item.conteudo.substr(0,30)}</p>
                    </div>
                </div>
            </div></Link>

        </div>
    ))

    const coluna2 = newdate2.map(item => (
        <div  className="columnnoticia3">

           <Link className="link" to={`/post/${item.id}`}> <div className='noticiacol3' style={{
                width: '100%',
                minHeight: '255px',
                backgroundImage: "url(" + item.imagem + ")",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display:'flex',
                flexDirection:'column',
                justifyContent:'end'
            }}>
                <div className='textoetitulocards'>

                    <div>
                        <h4>{item.titulo.substr(0,20)}</h4>
                        <p>{item.conteudo.substr(0,30)}</p>
                    </div>
                </div>
            </div></Link> 

        </div>
    ))
    return (
        <div className='coluna3'>
            <div className='coluna33'>

                {coluna1}




            </div>

            <div className='coluna35'>
                {coluna2}
            </div>

        </div>
    )
}