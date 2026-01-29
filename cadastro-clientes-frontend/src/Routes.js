import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 🔹 Clientes
import ClientesListagem from "./Components/clientes/ClientesListagem";
import ClientesCadastro from "./Components/clientes/ClientesCadastro";
import ClientesAlterar from "./Components/clientes/ClientesAlterar";
import ClientesExcluir from "./Components/clientes/ClientesExcluir";
import ClientesImpressao from "./Components/clientes/ClientesImpressao";

// 🔹 Orçamentos
import OrcamentosListagem from "./Components/orcamentos/OrcamentosListagem";
import OrcamentosCadastro from "./Components/orcamentos/OrcamentosCadastro";
import OrcamentosAlterar from "./Components/orcamentos/OrcamentosAlterar";
import OrcamentosExcluir from "./Components/orcamentos/OrcamentosExcluir";

// 🔹 Recibos
import RecibosListagem from "./Components/recibos/RecibosListagem";
import RecibosCadastro from "./Components/recibos/RecibosCadastro";
import RecibosAlterar from "./Components/recibos/RecibosAlterar";
import RecibosExcluir from "./Components/recibos/RecibosExcluir";

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
                            {/* Clientes */}
                            <li className="nav-item"><Link className="nav-link" to="/clientes">Clientes</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/orcamentos">Orçamentos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/recibos">Recibos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/impressao">Impressão</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                {/* 🔹 Clientes */}
                <Route path="/" element={<ClientesListagem />} /> {/* ✅ rota raiz corrigida */}
                <Route path="/clientes" element={<ClientesListagem />} />
                <Route path="/clientes/cadastrar" element={<ClientesCadastro />} />
                <Route path="/clientes/alterar" element={<ClientesAlterar />} />
                <Route path="/clientes/excluir" element={<ClientesExcluir />} />
                <Route path="/impressao" element={<ClientesImpressao />} />

                {/* 🔹 Orçamentos */}
                <Route path="/orcamentos" element={<OrcamentosListagem />} />
                <Route path="/orcamentos/cadastrar" element={<OrcamentosCadastro />} />
                <Route path="/orcamentos/alterar" element={<OrcamentosAlterar />} />
                <Route path="/orcamentos/excluir" element={<OrcamentosExcluir />} />

                {/* 🔹 Recibos */}
                <Route path="/recibos" element={<RecibosListagem />} />
                <Route path="/recibos/cadastrar" element={<RecibosCadastro />} />
                <Route path="/recibos/alterar" element={<RecibosAlterar />} />
                <Route path="/recibos/excluir" element={<RecibosExcluir />} />

                {/* 🔹 Rota padrão */}
                <Route path="*" element={<ClientesListagem />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
