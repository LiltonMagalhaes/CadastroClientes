import React, { useState, useEffect } from "react";
import axios from "axios";

function ClientesExcluir() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios.get("https://localhost:7037/api/Clientes")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  const handleBuscar = () => {
    setFiltro(busca);
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
      axios.delete(`https://localhost:7037/api/Clientes/${id}`)
        .then(() => {
          alert("Cliente excluído com sucesso!");
          setClientes(clientes.filter(c => c.id !== id));
        })
        .catch(error => {
          console.error("Erro ao excluir cliente:", error);
          alert("Erro ao excluir cliente.");
        });
    }
  };

  const estiloCelula = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
  };

  const clientesFiltrados = clientes.filter(c =>
    c.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    c.cpf?.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>
        🗑️ Excluir Cliente
      </h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Buscar por nome ou CPF"
          value={busca}
          onChange={e => setBusca(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={handleBuscar}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Buscar
        </button>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={estiloCelula}>Nome</th>
            <th style={estiloCelula}>Email</th>
            <th style={estiloCelula}>Telefone</th>
            <th style={estiloCelula}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map(cliente => (
            <tr key={cliente.id}>
              <td style={estiloCelula}>{cliente.nome}</td>
              <td style={estiloCelula}>{cliente.email}</td>
              <td style={estiloCelula}>{cliente.telefone}</td>
              <td style={estiloCel