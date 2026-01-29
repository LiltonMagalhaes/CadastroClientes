import React, { useEffect, useState } from "react";
import axios from "axios";

function Impressao() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5037/api/Clientes")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  const estiloCelula = {
    border: "1px solid #ddd",
    padding: "6px",
    textAlign: "left",
    fontSize: "13px"
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      {/* 🔹 Título clean */}
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "22px", fontWeight: "normal" }}>
        Relatório de Clientes
      </h2>

      {/* 🖨️ Botão de impressão */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => window.print()}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px"
          }}
        >
          Imprimir
        </button>
      </div>

      {/* 🧾 Tabela de clientes */}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={estiloCelula}>Nome</th>
            <th style={estiloCelula}>Email</th>
            <th style={estiloCelula}>Telefone</th>
            <th style={estiloCelula}>CPF</th>
            <th style={estiloCelula}>Endereço</th>
            <th style={estiloCelula}>Bairro</th>
            <th style={estiloCelula}>Cidade</th>
            <th style={estiloCelula}>Estado</th>
            <th style={estiloCelula}>CEP</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td style={estiloCelula}>{cliente.nome}</td>
              <td style={estiloCelula}>{cliente.email}</td>
              <td style={estiloCelula}>{cliente.telefone}</td>
              <td style={estiloCelula}>{cliente.cpf}</td>
              <td style={estiloCelula}>{cliente.endereco}</td>
              <td style={estiloCelula}>{cliente.bairro}</td>
              <td style={estiloCelula}>{cliente.cidade}</td>
              <td style={estiloCelula}>{cliente.estado}</td>
              <td style={estiloCelula}>{cliente.cep}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Impressao;
