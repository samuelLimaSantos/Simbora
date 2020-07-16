import React, { Component } from "react";
import Header from "../../components/Header";
import Modal from "../../components/ModalChoseCategory";
import Ideas from "../../components/Ideas";

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
            <Ideas city="remoto" />
          </div>
        )}

        {this.state.mode === "local" && (
          <div>
            <Ideas city={this.state.city} />
          </div>
        )}
      </div>
    );
  }
}
