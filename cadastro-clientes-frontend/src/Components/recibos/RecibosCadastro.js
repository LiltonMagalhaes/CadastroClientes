import React, { useState } from "react";
import axios from "axios";

function ClientesCadastro() {
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    cpf: ""
  });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://localhost:7037/api/Clientes", cliente)
      .then(() => {
        alert("Cliente cadastrado com sucesso!");
        setCliente({
          nome: "",
          email: "",
          telefone: "",
          endereco: "",
          bairro: "",
          cidade: "",
          estado: "",
          cep: "",
          cpf: ""
        });
      })
      .catch(error => {
        console.error("Erro ao cadastrar cliente:", error);
        alert("Erro ao cadastrar cliente.");
      });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>
        ➕ Cadastrar Cliente
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "15px" }}>
        <input type="text" name="nome" placeholder="Nome" value={cliente.nome} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={cliente.email} onChange={handleChange} required />
        <input type="text" name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} required />
        <input type="text" name="endereco" placeholder="Endereço" value={cliente.endereco} onChange={handleChange} />
        <input type="text" name="bairro" placeholder="Bairro" value={cliente.bairro} onChange={handleChange} />
        <input type="text" name="cidade" placeholder="Cidade" value={cliente.cidade} onChange={handleChange} />
        <input type="text" name="estado" placeholder="Estado" value={cliente.estado} onChange={handleChange} />