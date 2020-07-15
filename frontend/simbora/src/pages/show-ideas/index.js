import React, { Component } from "react";
import Header from "../../components/Header";
import Modal from "../../components/ModalChoseCategory";

export default class ShowIdeas extends Component {
  state = {
    city: "",
    mode: "",
  };

  onChildChanged(city, mode) {
    this.setState({ city: city, mode: mode });
  }

  render() {
    return (
      <div>
        <Header status={"Nova Ideia"} link={"/create-idea"} />

        {this.state.mode === "" && (
          <Modal
            callbackParent={(city, mode) => {
              this.onChildChanged(city, mode);
            }}
          />
        )}
        {this.state.mode === "remoto" && (
          <div>
            <h2>Fazer pesquisa remota</h2>
          </div>
        )}

        {this.state.mode === "local" && <h1>Fazer busca {this.state.city}</h1>}
      </div>
    );
  }
}
