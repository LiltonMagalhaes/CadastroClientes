import React, { useState, useEffect } from "react";
import axios from "axios";

function RecibosExcluir() {
  const [recibos, setRecibos] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios.get("https://localhost:5037/api/Recibos")
      .then(response => setRecibos(response.data))
      .catch(error => console.error("Erro ao buscar recibos:", error));
  }, []);

  const handleBuscar = () => {
    setFiltro(busca);
  };

  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este recibo?")) {
      axios.delete(`http://localhost:7037/api/Recibos/${id}`)
        .then(() => {
          alert("Recibo excluído com sucesso!");
          setRecibos(recibos.filter(r => r.id !== id));
        })
        .catch(error => {
          console.error("Erro ao excluir recibo:", error);
          alert("Erro ao excluir recibo.");
        });
    }
  };

  const estiloCelula = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left"
  };

  const recibosFiltrados = recibos.filter(r =>
    r.nomeCliente.toLowerCase().includes(filtro.toLowerCase()) ||
    r.cpf?.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>
        🗑️ Excluir Recibo
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
            <th style={estiloCelula}>Data</th>
            <th style={estiloCelula}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {recibosFiltrados.map(recibo => (
            <tr key={recibo.id}>
              <td style={estiloCelula}>{recibo.nomeCliente}</td>
              <td style={estiloCelula}>{recibo.cpf}</td>
              <td style={estiloCelula}>{recibo.valor}</td>
              <td style={estiloCelula}>{recibo.data}</td>
              <td style={estiloCelula}>
                <button
                  onClick={() => handleDelete(recibo.id)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
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

export default RecibosExcluir;
