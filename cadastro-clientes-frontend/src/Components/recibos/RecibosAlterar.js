import React, { useState, useEffect } from "react";
import axios from "axios";

function ClientesAlterar() {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7037/api/Clientes")
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  const handleBuscar = () => {
    setFiltro(busca);
  };

  const handleSelect = (cliente) => {
    setClienteSelecionado(cliente);
  };

  const handleChange = (e) => {
    setClienteSelecionado({ ...clienteSelecionado, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://localhost:7037/api/Clientes/${clienteSelecionado.id}`, clienteSelecionado)
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
    padding: "12px",
    textAlign: "left"
  };

  const clientesFiltrados = clientes.filter(c =>
    c.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    c.cpf?.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}></div>