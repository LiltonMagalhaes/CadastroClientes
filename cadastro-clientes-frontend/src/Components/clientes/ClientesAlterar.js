import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

function ClientesAlterar() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    id: 0,
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

  // 🔄 Carregar cliente pelo ID
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5037/api/Clientes/${id}`)
        .then(response => setCliente(response.data))
        .catch(error => console.error("Erro ao carregar cliente:", error.response || error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      const cpfFormatado = aplicarMascaraCpf(value);
      setCliente((prev) => ({ ...prev, cpf: cpfFormatado }));

      if (!validarCpf(cpfFormatado)) {
        setErroCpf("CPF inválido. Deve conter 11 dígitos.");
      } else {
        setErroCpf("");
      }
    } else {
      setCliente((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarCpf(cliente.cpf)) {
      alert("CPF inválido. Corrija antes de salvar.");
      return;
    }

    try {
      await axios.put(`http://localhost:5037/api/Clientes/${id}`, {
        ...cliente,
        id: parseInt(id)
      });
      alert("Cliente atualizado com sucesso!");
      navigate("/clientes");
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error.response?.data || error);
      alert("Erro ao atualizar cliente.");
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
        Alteração de Cliente
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
        <input type="text" name="nome" placeholder="Nome" value={cliente.nome} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="email" name="email" placeholder="Email" value={cliente.email} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="text" name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="text" name="cpf" placeholder="CPF" value={cliente.cpf} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="text" name="endereco" placeholder="Endereço" value={cliente.endereco} onChange={handleChange} required
          style={{ gridColumn: "span 2", padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="text" name="bairro" placeholder="Bairro" value={cliente.bairro} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="text" name="cidade" placeholder="Cidade" value={cliente.cidade} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="text" name="estado" placeholder="Estado" value={cliente.estado} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

        <input type="text" name="cep" placeholder="CEP" value={cliente.cep} onChange={handleChange} required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} />

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
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}

export default ClientesAlterar;
