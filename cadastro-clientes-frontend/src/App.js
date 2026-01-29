import React from "react";
import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* 🔹 Cabeçalho principal */}
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>📌 Sistema de Cadastro</h1>

      {/* 🔹 Renderiza todas as rotas */}
      <AppRoutes />
    </div>
  );
}

export default App;
