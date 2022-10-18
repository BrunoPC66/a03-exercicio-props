import React from "react";

export default function InfosUsuario(props){
    return (
    <div className="info">
    <img src={props.usuario.imagem} alt="" className="user"/>
    <p>{props.usuario.user}</p>
    </div>
    )
}