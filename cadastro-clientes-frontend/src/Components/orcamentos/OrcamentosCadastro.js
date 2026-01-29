import React, { useState, useEffect } from "react";
import axios from "axios";

function OrcamentoCadastro() {
  const [orcamentos, setOrcamentos] = useState([]);
  const [novoOrcamento, setNovoOrcamento] = useState({
    clienteId: "",
    descricao: "",
    valor: ""
  });
  const [clientes, setClientes] = useState([]);

  // 🔄 Carrega lista de clientes para vincular ao orçamento
  useEffect(() => {
    axios.get("http://localhost:5037/api/Clientes")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  // 🔄 Carrega lista de orçamentos (opcional, para validar duplicidade ou atualizar lista)
  useEffect(() => {
    axios.get("http://localhost:5037/api/Orcamentos")
      .then(response => setOrcamentos(response.data))
      .catch(error => console.error("Erro ao buscar orçamentos:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoOrcamento(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 Validação simples: não permitir orçamento vazio
    if (!novoOrcamento.clienteId || !novoOrcamento.descricao || !novoOrcamento.valor) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      await axios.post("http://localhost:5037/api/Orcamentos", novoOrcamento);
      alert("Orçamento cadastrado com sucesso!");

      // Limpa formulário
      setNovoOrcamento({ clienteId: "", descricao: "", valor: "" });

      // Atualiza lista
      const response = await axios.get("http://localhost:5037/api/Orcamentos");
      setOrcamentos(response.data);

    } catch (error) {
      console.error("Erro ao cadastrar orçamento:", error);
      alert("Erro ao cadastrar orçamento.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Cadastro de Orçamento
      </h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <select
          name="clienteId"
          value={novoOrcamento.clienteId}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        >
          <option value="">Selecione o Cliente</option>
          {clientes.map(c => (
            <option key={c.id} value={c.id}>{c.nome}</option>
          ))}
        </select>

        <input
          type="text"
          name="descricao"
          placeholder="Descrição do orçamento"
          value={novoOrcamento.descricao}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={novoOrcamento.valor}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Salvar
        </button>
      </form>
    </div>
  );
}

export default OrcamentoCadastro;
