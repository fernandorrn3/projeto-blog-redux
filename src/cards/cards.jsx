import React from "react";
import { useSelector } from "react-redux";
export const Cards = ()=>{
    const posts = useSelector(state => state.post)
    console.log(posts)
     
return(
    <div>
<div className="cardscontent">
    <div className="cardimg"></div>
    <div className="cardinfos"></div>
    <div className="cardcorpo"></div>
</div>
    </div>
)
}