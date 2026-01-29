import React, { useEffect, useState } from "react";
import axios from "axios";

function ClientesListagem() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    axios.get("https://localhost:7037/api/Clientes")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  const estiloCelula = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
  };

  const clientesFiltrados = clientes.filter(c =>
    c.nome.toLowerCase().includes(busca.toLowerCase()) ||
    c.cpf?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📋 Lista de Clientes</h2>

      <input
        type="text"
        placeholder="🔍 Buscar por nome ou CPF"
        value={busca}
        onChange={e => setBusca(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      />

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px", fontSize: "16px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={estiloCelula}>Nome</th>
            <th style={estiloCelula}>Email</th>
            <th style={estiloCelula}>Telefone</th>
            <th style={estiloCelula}>CPF</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map(cliente => (
            <tr key={cliente.id}>
              <td style={estiloCelula}>{cliente.nome}</td>
              <td style={estiloCelula}>{cliente.email}</td>
              <td style={estiloCelula}>{cliente.telefone}</td>
              <td style={estiloCelula}>{cliente.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesListagem;
