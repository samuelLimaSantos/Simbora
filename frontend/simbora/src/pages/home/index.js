import React from "react";
import "./styles.css";
import Button from "../../components/Button";
import Header from "../../components/Header";
import gameImage from "../../assets/Game.svg";
import funImage from "../../assets/Fun.svg";
import joystick from "../../assets/joystick.svg";
import friendsImage from "../../assets/Comida.svg";

const Home = () => {
  return (
    <div className="father">
      <Header />
      <div className="container">
        <main className="content-home">
          <section id="caixa">
            <div>
              <h1>
                Ideias de programações de
                <strong className="highlight-text"> lazer </strong> ao seu
                <strong className="highlight-text"> alcance.</strong>
              </h1>
              <h5>
                Você se encontra no tédio, atrás de idéias para melhorar o seu
                dia e tudo isso na palma da sua mão?
                <br />
                <br />
                Com o<strong className="highlight-text"> Simbora </strong>
                você pode compartilhar suas ideias e ter
                <strong className="highlight-text"> acesso </strong>a todas as
                ideias criadas pela comunidade.
              </h5>
              <h4>Comece a se divertir</h4>
              <div id="botao">
                <Button text="Agora" link="/show-ideas" />
              </div>
            </div>
          </section>
          <section className="images">
            <img src={gameImage} alt="" />
            <img src={funImage} alt="" />
            <img src={joystick} alt="" />

            <img src={friendsImage} alt="" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
