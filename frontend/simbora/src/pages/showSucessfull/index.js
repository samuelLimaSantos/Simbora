import React from "react";
import Header from "../../components/Header";

const Sucessfull = () => {
  return (
    <div>
      <Header status={"Nova Ideia"} link={"/create-idea"} />
      <h1>Ideia Cadastrada com Sucesso</h1>
    </div>
  );
};

export default Sucessfull;
