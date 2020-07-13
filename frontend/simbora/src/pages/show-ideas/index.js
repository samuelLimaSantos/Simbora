import React, { Component } from "react";
import Header from "../../components/Header";
import Modal from "../../components/ModalChoseCategory";
import axios from "axios";

export default class ShowIdeas extends Component {
  state = {
    city: "",
    mode: "",
  };

  onChildChanged(city, mode) {
    this.setState({ city: city, mode: mode });
  }

  async callApi() {
    console.log("Oi");
    const datas = await axios.get("http://localhost:3333/ideas");
    console.log(datas.data[0].author);
    return datas.data[0].author;
  }

  render() {
    return (
      <div>
        <Header status={"Nova Ideia"} link={"/create-idea"} />

        {this.state.mode == "" && (
          <Modal
            callbackParent={(city, mode) => {
              this.onChildChanged(city, mode);
            }}
          />
        )}
        {this.state.mode === "remoto" && <div>{this.callApi()}</div>}

        {this.state.mode === "local" && <h1>Fazer busca {this.state.city}</h1>}
      </div>
    );
  }
}
