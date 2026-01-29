import React from "react";
import axios from "axios";

function ClientesExcluir({ clienteId, onExcluido }) {
  const handleExcluir = async () => {
    if (!window.confirm("Tem certeza que deseja excluir este cliente?")) return;

    try {
      await axios.delete(`http://localhost:5037/api/Clientes/${clienteId}`);
      alert("Cliente excluído com sucesso!");
      if (onExcluido) onExcluido(clienteId);
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      alert("Erro ao excluir cliente.");
    }
  };

  return (
    <button
      onClick={handleExcluir}
      style={{
        padding: "8px 16px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Excluir
    </button>
  );
}

export default ClientesExcluir;
