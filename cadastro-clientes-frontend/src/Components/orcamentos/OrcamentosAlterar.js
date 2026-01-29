import React, { useState, useEffect } from "react";
import axios from "axios";

function ClientesAlterar() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7037/api/Clientes")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  const handleSelect = (cliente) => {
    setClienteSelecionado(cliente);
  };

  const handleChange = (e) => {
    setClienteSelecionado({ ...clienteSelecionado, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5037/api/Clientes/${clienteSelecionado.id}`, clienteSelecionado)
      .then(() => {
        alert("Cliente alterado com sucesso!");
        setClienteSelecionado(null);
      })
      .catch(error => {
        console.error("Erro ao alterar cliente:", error);
        alert("Erro ao alterar cliente.");
      });
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>✏️ Alterar Cliente</h2>

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
                <button onClick={() => handleSelect(cliente)} style={{ padding: "6px 12px" }}>
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulário de alteração */}
      {clienteSelecionado && (
        <form onSubmit={handleSubmit} style={{ marginTop: "30px", display: "grid", gap: "10px" }}>
          <input type="text" name="nome" value={clienteSelecionado.nome} onChange={handleChange} required />
          <input type="email" name="email" value={clienteSelecionado.email} onChange={handleChange} required />
          <input type="text" name="telefone" value={clienteSelecionado.telefone} onChange={handleChange} required />
          <input type="text" name="endereco" value={clienteSelecionado.endereco} onChange={handleChange} />
          <input type="text" name="bairro" value={clienteSelecionado.bairro} onChange={handleChange} />
          <input type="text" name="cidade" value={clienteSelecionado.cidade} onChange={handleChange} />
          <input type="text" name="estado" value={clienteSelecionado.estado} onChange={handleChange} />
          <input type="text" name="cep" value={clienteSelecionado.cep} onChange={handleChange} />
          <input type="text" name="cpf" value={clienteSelecionado.cpf} onChange={handleChange} required />

          <button type="submit" style={{
            padding: "12px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Salvar Alterações
          </button>
        </form>
      )}
    </div>
  );
}

export default ClientesAlterar;
