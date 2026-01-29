import React, { useEffect, useState } from "react";
import axios from "axios";

function RecibosListagem() {
  const [recibos, setRecibos] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5037/api/Recibos")
      .then(response => setRecibos(response.data))
      .catch(error => console.error("Erro ao buscar recibos:", error));
  }, []);

  const estiloCelula = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
  };

  const recibosFiltrados = recibos.filter(r =>
    r.nomeCliente.toLowerCase().includes(filtro.toLowerCase()) ||
    r.cpf?.toLowerCase().includes(filtro.toLowerCase())
  );

  const handleBuscar = () => {
    setFiltro(busca);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      {/* 🔹 Título clean */}
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "26px", fontWeight: "normal" }}>
        Buscar Recibo
      </h2>

      {/* 🔍 Campo de busca */}
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

      {/* 🧾 Tabela de recibos */}
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "16px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={estiloCelula}>Cliente</th>
            <th style={estiloCelula}>CPF</th>
            <th style={estiloCelula}>Valor</th>
            <th style={estiloCelula}>Descrição</th>
            <th style={estiloCelula}>Data</th>
          </tr>
        </thead>
        <tbody>
          {recibosFiltrados.map(recibo => (
            <tr key={recibo.id}>
              <td style={estiloCelula}>{recibo.nomeCliente}</td>
              <td style={estiloCelula}>{recibo.cpf}</td>
              <td style={estiloCelula}>{recibo.valor}</td>
              <td style={estiloCelula}>{recibo.descricao}</td>
              <td style={estiloCelula}>{recibo.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecibosListagem;
