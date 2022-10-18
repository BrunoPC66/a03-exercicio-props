import React from "react";
import { CardVideo } from "./components/CardVideo";
import "./styles.css";
import foto from "./img/Captura de tela 2022-08-03 140640.png"

export default function App() {
  const video = {
    imagem: "https://picsum.photos/400/400?a=1",
    titulo: "Título do vídeo"
  }
  const infosUsuario = {
    user: "Salim",
    imagem: {foto}
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo 
            infos = {infosUsuario}
            video = {video}/>
            <CardVideo
            infos = {infosUsuario}
            video = {video}/>
            <CardVideo
            infos = {infosUsuario}
            video = {video}/>
            <CardVideo
            infos = {infosUsuario}
            video = {video}/>
            <CardVideo
            infos = {infosUsuario}
            video = {video}/>
            <CardVideo
            infos = {infosUsuario}
            video = {video}/>
            <CardVideo
            infos = {infosUsuario}
            video = {video}/>
            <CardVideo
            infos = {infosUsuario}
            video = {video}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
