import React from "react";
import './sidebarposts.css';
import { useSelector } from "react-redux";

export const SidebarPost = () => {

    const postRecente = useSelector(state => state.post)

    const pegaCategproa = postRecente.map(item => item.categoria)
    const removeduplicate = pegaCategproa.filter((item, index) => {
        return pegaCategproa.indexOf(item) === index
    })


    const filtrar = postRecente.filter(function (elemento) {
        return elemento
    })

    function toDate(dateStr) {

        var parts = dateStr.split("/");

        return new Date(parts[2], parts[1] - 1, parts[0]);
    }


    filtrar.sort(function (a, b) {
        const dateeA = new Date(toDate(a.data));
        const dateeB = new Date(toDate(b.data));
        return dateeA - dateeB;
    })


    const novaData = filtrar.slice(-3)
    const novaData2 = filtrar.slice(-6, -3)


    console.log(novaData)

    return (
        <div className="sidebarposts">
            <div className="sidebarcategorie">
                <div><h4>Categorias</h4></div>
                <div className="catsidebarnome">{removeduplicate.map(item => (
                    <div className="nomecatside"> <p>{item}</p></div>
                ))}</div>
            </div>
            <div className="ultimaspostagem">
                <div><h4>Ultimas postagens</h4></div>

                <div className="imagembarultimas">  
                <div className="ultimospostside1">
                    {novaData.map(item =>(
                        <div className="imgsidebarsingle">
                            <img  src={`${process.env.PUBLIC_URL + '/' + item.imagem}`} />
                        
                        </div>
                    ))}
                </div>
                <div className="ultimospostside1">
                {novaData2.map(item =>(
                        <div className="imgsidebarsingle">
                            <img  src={`${process.env.PUBLIC_URL + '/' + item.imagem}`} />
                        
                        </div>
                    ))}
                </div>

                </div>
              
            </div>
        </div>
    )
}