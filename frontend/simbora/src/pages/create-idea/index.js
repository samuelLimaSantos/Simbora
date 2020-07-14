import React, { Component } from "react";
import Header from "../../components/Header";
import Forms from "../../components/forms";
import localAsset from "../../assets/Local.svg";
import remoteAsset from "../../assets/Remote.svg";
import "./style.css";

export default class CreateIdea extends Component {
  state = {
    type: "",
  };

  render() {
    return (
      <div>
        <Header status={"Voltar"} link={"/"} />
        <div className="forms-create-idea">
          {this.state.type === "" && (
            <section className="container-forms">
              <h3>Como as pessoas vão aproveitar a sua ideia?</h3>
              <section>
                <a
                  onClick={() => {
                    this.setState({ type: "local" });
                  }}
                >
                  <img
                    src={localAsset}
                    alt="Local-img"
                    width="150px"
                    height="147px"
                  />
                  <h4>Local</h4>
                </a>
                <a
                  onClick={() => {
                    this.setState({ type: "remoto" });
                  }}
                >
                  <img
                    src={remoteAsset}
                    alt="Local-img"
                    width="150px"
                    height="147px"
                  />
                  <h4>Remoto</h4>
                </a>
              </section>
            </section>
          )}

          {this.state.type === "local" && <Forms Status={true} />}
          {this.state.type === "remoto" && <Forms Status={false} />}
        </div>
      </div>
    );
  }
}
