import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ClientesListagem() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    carregarClientes();
  }, []);

  const carregarClientes = async () => {
    try {
      const response = await axios.get("http://localhost:5037/api/Clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao carregar clientes:", error);
    }
  };

  const excluirCliente = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este cliente?")) {
      try {
        await axios.delete(`http://localhost:5037/api/Clientes/${id}`);
        carregarClientes();
      } catch (error) {
        console.error("Erro ao excluir cliente:", error);
      }
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "16px", fontSize: "20px" }}>
        Lista de Clientes
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
        }}
      >
        <thead style={{ backgroundColor: "#007bff", color: "white" }}>
          <tr>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>Nome</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>Email</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>Telefone</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>CPF</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>Endereço</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>Cidade</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>Estado</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>CEP</th>
            <th style={{ padding: "6px", border: "1px solid #ccc" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.nome}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.email}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.telefone}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.cpf}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.endereco}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.cidade}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.estado}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>{cliente.cep}</td>
              <td style={{ padding: "6px", border: "1px solid #ccc" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                  <Link
                    to={`/clientes/alterar?id=${cliente.id}`}
                    style={{
                      padding: "2px 6px",
                      border: "1px solid #ffa500",
                      color: "#ffa500",
                      borderRadius: "4px",
                      fontSize: "11px",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      textAlign: "center"
                    }}
                  >
                    Alterar
                  </Link>
                  <button
                    onClick={() => excluirCliente(cliente.id)}
                    style={{
                      padding: "2px 6px",
                      border: "1px solid #dc3545",
                      color: "#dc3545",
                      backgroundColor: "transparent",
                      borderRadius: "4px",
                      fontSize: "11px",
                      cursor: "pointer",
                      textAlign: "center"
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientesListagem;
