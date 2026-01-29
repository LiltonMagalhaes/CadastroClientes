import React, { useState } from "react";
import axios from "axios";

function ClientesCadastro() {
  const [novoCliente, setNovoCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: ""
  });

  const [erroCpf, setErroCpf] = useState("");

  // 🔄 Máscara de CPF
  const aplicarMascaraCpf = (valor) => {
    return valor
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
      .slice(0, 14);
  };

  // 🔍 Validação simples de CPF
  const validarCpf = (cpf) => {
    const apenasNumeros = cpf.replace(/\D/g, "");
    return apenasNumeros.length === 11;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      const cpfFormatado = aplicarMascaraCpf(value);
      setNovoCliente((prev) => ({ ...prev, cpf: cpfFormatado }));

      if (!validarCpf(cpfFormatado)) {
        setErroCpf("CPF inválido. Deve conter 11 dígitos.");
      } else {
        setErroCpf("");
      }
    } else {
      setNovoCliente((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarCpf(novoCliente.cpf)) {
      alert("CPF inválido. Corrija antes de salvar.");
      return;
    }

    try {
      await axios.post("http://localhost:5037/api/Clientes", novoCliente);
      alert("Cliente cadastrado com sucesso!");
    
      setNovoCliente({
        nome: "",
        email: "",
        telefone: "",
        cpf: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: ""
      });
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      alert("Erro ao cadastrar cliente.");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "30px" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          fontWeight: "600",
          color: "#333"
        }}
      >
        Cadastro de Cliente
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          backgroundColor: "#f9f9f9",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoCliente.nome}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={novoCliente.email}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={novoCliente.telefone}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={novoCliente.cpf}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={novoCliente.endereco}
          onChange={handleChange}
          required
          style={{ gridColumn: "span 2", padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="bairro"
          placeholder="Bairro"
          value={novoCliente.bairro}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={novoCliente.cidade}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="estado"
          placeholder="Estado"
          value={novoCliente.estado}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={novoCliente.cep}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        {erroCpf && (
          <p style={{ color: "red", fontSize: "14px", margin: "0", gridColumn: "span 2" }}>
            {erroCpf}
          </p>
        )}

        <button
          type="submit"
          style={{
            gridColumn: "span 2",
            padding: "14px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "500",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Salvar Cliente
        </button>
      </form>
    </div>
  );
}

export default ClientesCadastro;
