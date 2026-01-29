import React, { useEffect, useState } from "react";
import axios from "axios";

function OrcamentosListagem() {
  const [orcamentos, setOrcamentos] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5037/api/Orcamentos")
      .then(response => setOrcamentos(response.data))
      .catch(error => console.error("Erro ao buscar orçamentos:", error));
  }, []);

  const estiloCelula = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
  };

  const orcamentosFiltrados = orcamentos.filter(o =>
    o.nomeCliente.toLowerCase().includes(filtro.toLowerCase()) ||
    o.numero?.toString().includes(filtro)
  );

  const handleBuscar = () => {
    setFiltro(busca);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      {/* 🔹 Título clean */}
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "26px", fontWeight: "normal" }}>
        Buscar Orçamento
      </h2>

      {/* 🔍 Campo de busca */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Buscar por cliente ou número"
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

      {/* 🧾 Tabela de orçamentos */}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={estiloCelula}>Cliente</th>
            <th style={estiloCelula}>Número</th>
            <th style={estiloCelula}>Valor</th>
            <th style={estiloCelula}>Descrição</th>
            <th style={estiloCelula}>Data</th>
          </tr>
        </thead>
        <tbody>
          {orcamentosFiltrados.map(orcamento => (
            <tr key={orcamento.id}>
              <td style={estiloCelula}>{orcamento.nomeCliente}</td>
              <td style={estiloCelula}>{orcamento.numero}</td>
              <td style={estiloCelula}>{orcamento.valor}</td>
              <td style={estiloCelula}>{orcamento.descricao}</td>
              <td style={estiloCelula}>{orcamento.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrcamentosListagem;
