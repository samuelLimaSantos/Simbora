import React, { Component } from "react";
import axios from "axios";

export default class Forms extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    if (this.props.Status === true) {
      const ufSelect = document.querySelector("select[name=uf]");
      const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
      const states = await axios.get(url);
      const dados = states.data;
      dados.map((item) => {
        return (ufSelect.innerHTML += `<option value = ${item.id}>${item.nome}</option>`);
      });

      ufSelect.addEventListener("change", this.getCities);

      this.setCategories();
      return;
    }

    return;
  }

  async getCities(event) {
    const city = document.querySelector("select[name = cidade]");
    city.addEventListener("change", (event) => {
      const cityInput = document.querySelector("input[name=city]");
      const indexOfSelectedState = event.target.selectedIndex;

      cityInput.value = event.target.options[indexOfSelectedState].text;
    });
    city.disabled = false;
    city.innerHTML = "<option value></option>";

    const ufValue = event.target.value;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;
    const stateInput = document.querySelector("input[name = state]");
    const indexOfSelectedState = event.target.selectedIndex;

    stateInput.value = event.target.options[indexOfSelectedState].text;

    const cities = await axios.get(url);
    const dados = cities.data;
    dados.map((item) => {
      return (city.innerHTML += `<option value = ${"'" + item.nome + "'"}>${
        item.nome
      }</option>`);
    });
  }

  setCategories() {
    const itemsToCollect = document.querySelectorAll(".categories-grid li");
    const collectedItems = document.querySelector("input[name = category]");
    var selectedItems = [];
    itemsToCollect.forEach((item) => {
      item.addEventListener("click", (event) => {
        const itemLi = event.target;

        itemLi.classList.toggle("selected");
        const ItemId = itemLi.dataset.id;

        const alreadySelected = selectedItems.findIndex((item) => {
          const itemFound = item === ItemId;
          return itemFound;
        });

        if (alreadySelected >= 0) {
          const filtedItems = selectedItems.filter((item) => {
            const itemIsDifferent = item != ItemId;
            return itemIsDifferent;
          });
          selectedItems = filtedItems;
        } else {
          selectedItems.push(ItemId);
        }

        collectedItems.value = selectedItems;
      });
    });
  }

  async sendDatas() {
    const title = document.querySelector("input[name=title]").value;
    const author = document.querySelector("input[name=author]").value;
    const linkImg = document.querySelector("input[name=linkImg]").value;
    const description = document.querySelector("textarea[name=description]")
      .value;
    const linkMoreDetails = document.querySelector(
      "input[name=linkMoreDetails]"
    ).value;
    const category = document.querySelector("input[name=category]").value;

    try {
      const state = document.querySelector("input[name=state]").value;
      const city = document.querySelector("input[name=city]").value;
      const address = document.querySelector("input[name=address]").value;

      axios.post("http://localhost:3333/ideas", {
        title,
        author,
        linkImg,
        description,
        state,
        city,
        address,
        linkMoreDetails,
        category,
      });

      return;
    } catch (erro) {
      axios.post("http://localhost:3333/ideas", {
        title,
        author,
        linkImg,
        description,
        linkMoreDetails,
        category,
      });
    }
  }

  render() {
    return (
      <div className="container-forms-create">
        <div className="mini-header">
          <img src="" alt="" />
          <h2>Pensou em algo?</h2>
        </div>
        <h1>Compartilhe com a gente!</h1>
        <form>
          <fieldset>
            <legend>
              <h2>Dados da ideia:</h2>
            </legend>
            <div className="single-collum">
              <label htmlFor="title">Título da ideia</label>
              <input type="text" name="title" required />
            </div>
            <div className="double-collum">
              <label htmlFor="author">Autor:</label>
              <input type="text" name="author" required />
              <label htmlFor="linkImg">Link da Imagem:</label>
              <input type="url" name="linkImg" required />
            </div>
            <div className="single-collum">
              <label htmlFor="description">Descrição</label>
              <textarea
                name="description"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            {this.props.Status === true && (
              <div>
                <div className="double-collum">
                  <label htmlFor="state">Estado:</label>
                  <select name="uf" required>
                    <option value="">Selecione o Estado</option>
                  </select>
                  <input type="hidden" name="state" />

                  <label htmlFor="cidade">Cidade:</label>
                  <select name="cidade" disabled required>
                    <option value="">Selecione a cidade</option>
                  </select>
                  <input type="hidden" name="city" />
                </div>
                <div className="single-collum">
                  <label htmlFor="address">Endereço</label>
                  <input type="text" name="address" required />
                </div>
              </div>
            )}

            <label htmlFor="linkMoreDetails">Link Para mais Detalhes</label>
            <input type="text" name="linkMoreDetails" />
          </fieldset>
          <fieldset className="categories">
            <legend>
              <h2>Categorias</h2>
              <span>Selecione uma ou mais categorias abaixo</span>
            </legend>
            <div className="categories-grid">
              <li>
                <img src="" alt="" />
                <span data-id="Culinária">Culinária</span>
              </li>
              <li>
                <img src="" alt="" />
                <span data-id="Saúde e Bem-Estar">Saúde e Bem-Estar</span>
              </li>
              <li>
                <img src="" alt="" />
                <span data-id="Festas">Festas</span>
              </li>
              <li>
                <img src="" alt="" />
                <span data-id="Games">Games</span>
              </li>
              <li>
                <img src="" alt="" />
                <span data-id="Infantil">Infantil</span>
              </li>
              <li>
                <img src="" alt="" />
                <span data-id="Saúde e Bem-Estar">Saúde e Bem-Estar</span>
              </li>
              <li>
                <img src="" alt="" />
                <span data-id="Viagens">Viagens</span>
              </li>
            </div>
            <input type="hidden" name="category" />
          </fieldset>
          <button onClick={this.sendDatas}>Cadastrar</button>
        </form>
      </div>
    );
  }
}
