import React, { useState, useEffect } from "react";
import axios from "axios";

function ClientesExcluir() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5037/api/Clientes")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
      axios.delete(`http://localhost:7037/api/Clientes/${id}`)
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
    padding: "10px",
    textAlign: "left"
  };

  const clientesFiltrados = clientes.filter(c =>
    c.nome.toLowerCase().includes(busca.toLowerCase()) ||
    c.cpf?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🗑️ Excluir Cliente</h2>

      {/* Campo de busca */}
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

      {/* Lista de clientes */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px", fontSize: "16px" }}>
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
              <td style={estiloCelula}>
                <button 
                  onClick={() => handleDelete(cliente.id)} 
                  style={{ padding: "6px 12px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px" }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesExcluir;
