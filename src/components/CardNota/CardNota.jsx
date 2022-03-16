import React, { Component } from "react";
import "./estilo.css"

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <hearder className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">Título</h3>
        </hearder>
        <p className="card-nota_texto">Escreva sua nota</p>
      </section>
    );
  }
}

export default CardNota;
