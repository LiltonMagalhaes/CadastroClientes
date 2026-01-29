# CadastroClientes

Sistema de cadastro de clientes desenvolvido em **ASP.NET Core 8** com **Entity Framework Core** e **SQLite**, integrado a um front-end em **React**.  
Permite realizar operações completas de CRUD (listar, incluir, alterar, excluir) e direcionar para impressão.

---

## 🚀 Funcionalidades
- 📋 Listagem de clientes
- ➕ Inclusão de novos clientes
- ✏️ Alteração de dados existentes
- ❌ Exclusão de clientes
- 🖨️ Direcionamento para impressão

---

## 🛠️ Tecnologias utilizadas
- **ASP.NET Core 8**
- **Entity Framework Core**
- **SQLite**
- **React (frontend)**
- **Swagger** para documentação e testes da API

---

## 📌 Estrutura da API
### Endpoints disponíveis

- `GET /api/Clientes` → Lista todos os clientes  
- `GET /api/Clientes/{id}` → Busca cliente específico  
- `POST /api/Clientes` → Cadastra novo cliente  
- `PUT /api/Clientes/{id}` → Atualiza cliente existente  
- `DELETE /api/Clientes/{id}` → Exclui cliente  

---

## ⚙️ Como executar o projeto

### 🔧 Backend (ASP.NET Core)
1. Clone o repositório:
   ```bash
   git clone https://github.com/LiltonMagalhaes/CadastroClientes.git
