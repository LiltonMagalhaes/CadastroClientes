import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 🔹 Clientes
import ClientesListagem from "./Components/clientes/ClientesListagem";
import ClientesCadastro from "./Components/clientes/ClientesCadastro";
import ClientesAlterar from "./Components/clientes/ClientesAlterar";
import ClientesExcluir from "./Components/clientes/ClientesExcluir";

// 🔹 Impressão (corrigido para a pasta correta)
import Impressao from "./Components/Impressao";

function AppRoutes() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Sistema de Cadastro</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* 🔹 Clientes */}
                            <li className="nav-item"><Link className="nav-link" to="/clientes">Clientes</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/clientes/cadastrar">+ Novo Cliente</Link></li>
                                                      
                            {/* 🔹 Impressão */}
                            <li className="nav-item"><Link className="nav-link" to="/impressao">Impressão</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                {/* 🔹 Clientes */}
                <Route path="/" element={<ClientesListagem />} />
                <Route path="/clientes" element={<ClientesListagem />} />
                <Route path="/clientes/cadastrar" element={<ClientesCadastro />} />
                <Route path="/clientes/alterar" element={<ClientesAlterar />} />
                <Route path="/clientes/excluir" element={<ClientesExcluir />} />
                
                {/* 🔹 Impressão */}
                <Route path="/impressao" element={<Impressao />} />

                {/* 🔹 Rota padrão */}
                <Route path="*" element={<ClientesListagem />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
