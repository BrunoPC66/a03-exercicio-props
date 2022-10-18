import React from "react";
import InfosUsuario from "./InfosUsuario"

// const titulo = "Título do vídeo";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
  return (
    <div>
      <InfosUsuario usuario = {props.infos}/>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.video.imagem} alt="" />
        <h4>{props.video.titulo}</h4>
      </div>
    </div>
  );
}
