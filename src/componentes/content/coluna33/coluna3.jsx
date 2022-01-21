import React from "react";
import './coluna3.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Cards } from "../../../cards/cards";
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
<Cards imagem={item.imagem} usuario={item.autor} data={item.data} conteudo={item.conteudo}/>

        </div>
    ))

    const coluna2 = newdate2.map(item => (
        <div  className="columnnoticia3">

<Cards imagem={item.imagem} usuario={item.autor} data={item.data} conteudo={item.conteudo}/>

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