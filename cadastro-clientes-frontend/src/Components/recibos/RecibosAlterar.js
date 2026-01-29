import React, { useState, useEffect } from "react";
import axios from "axios";

function RecibosAlterar() {
  const [recibos, setRecibos] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");
  const [reciboSelecionado, setReciboSelecionado] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7037/api/Recibos")
      .then(response => setRecibos(response.data))
      .catch(error => console.error("Erro ao buscar recibos:", error));
  }, []);

  const handleBuscar = () => setFiltro(busca);

  const handleSelect = (recibo) => setReciboSelecionado(recibo);

  const handleChange = (e) => {
    setReciboSelecionado({ ...reciboSelecionado, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5037/api/Recibos/${reciboSelecionado.id}`, reciboSelecionado)
      .then(() => {
        alert("Recibo alterado com sucesso!");
        setReciboSelecionado(null);
      })
      .catch(error => {
        console.error("Erro ao alterar recibo:", error);
        alert("Erro ao alterar recibo.");
      });
  };

  const estiloCelula = { border: "1px solid #ddd", padding: "12px", textAlign: "left" };

  const recibosFiltrados = recibos.filter(r =>
    r.nomeCliente.toLowerCase().includes(filtro.toLowerCase()) ||
    r.cpf?.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px" }}>
        ✏️ Alterar Recibo
      </h2>

      {/* 🔍 Campo de busca */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Buscar por nome ou CPF"
          value={busca}
          onChange={e => setBusca(e.target.value)}
          style={{ padding: "10px", maxWidth: "400px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button onClick={handleBuscar} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "6px" }}>
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
                <button onClick={() => handleSelect(recibo)} style={{ padding: "6px 12px" }}>
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulário de edição */}
      {reciboSelecionado && (
        <form onSubmit={handleSubmit} style={{ marginTop: "30px", display: "grid", gap: "10px" }}>
          <input type="text" name="nomeCliente" value={reciboSelecionado.nomeCliente} onChange={handleChange} required />
          <input type="text" name="cpf" value={reciboSelecionado.cpf} onChange={handleChange} required />
          <input type="number" name="valor" value={reciboSelecionado.valor} onChange={handleChange} required />
          <input type="text" name="descricao" value={reciboSelecionado.descricao} onChange={handleChange} />
          <input type="date" name="data" value={reciboSelecionado.data} onChange={handleChange} required />

          <button type="submit" style={{ padding: "12px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "6px" }}>
            Salvar Alterações
          </button>
        </form>
      )}
    </div>
  );
}

export default RecibosAlterar;
