import React, { useState } from "react";
import axios from "axios";

function RecibosCadastro() {
  const [recibo, setRecibo] = useState({
    nomeCliente: "",
    valor: "",
    descricao: "",
    data: "",
    cpf: ""
  });

  const handleChange = (e) => {
    setRecibo({ ...recibo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:7037/api/Recibos", recibo)
      .then(() => {
        alert("Recibo cadastrado com sucesso!");
        setRecibo({
          nomeCliente: "",
          valor: "",
          descricao: "",
          data: "",
          cpf: ""
        });
      })
      .catch(error => {
        console.error("Erro ao cadastrar recibo:", error);
        alert("Erro ao cadastrar recibo.");
      });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>
        ➕ Cadastrar Recibo
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
        <input type="text" name="nomeCliente" placeholder="Nome do Cliente" value={recibo.nomeCliente} onChange={handleChange} required />
        <input type="text" name="cpf" placeholder="CPF" value={recibo.cpf} onChange={handleChange} required />
        <input type="number" name="valor" placeholder="Valor (R$)" value={recibo.valor} onChange={handleChange} required />
        <input type="text" name="descricao" placeholder="Descrição" value={recibo.descricao} onChange={handleChange} />
        <input type="date" name="data" value={recibo.data} onChange={handleChange} required />

        <button type="submit" style={{
          padding: "12px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px"
        }}>
          Salvar Recibo
        </button>
      </form>
    </div>
  );
}

export default RecibosCadastro;
