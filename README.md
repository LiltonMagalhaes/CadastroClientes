# CadastroClientes API

API em ASP.NET Core para **cadastro de clientes**, emissão de **orçamentos** e **recibos**.  
Projeto desenvolvido com **Entity Framework Core** e banco de dados **SQLite**.

---

## Funcionalidades

### Clientes
- `POST /api/Clientes` → Cadastrar cliente
- `GET /api/Clientes` → Listar todos os clientes
- `GET /api/Clientes/{id}` → Buscar cliente por ID
- `PUT /api/Clientes/{id}` → Atualizar cliente
- `DELETE /api/Clientes/{id}` → Excluir cliente

### Orçamentos
- `POST /api/Orcamentos` → Emitir orçamento (materiais + mão de obra + serviços)
- `GET /api/Orcamentos` → Listar orçamentos
- `GET /api/Orcamentos/{id}` → Buscar orçamento por ID

### Recibos
- `POST /api/Recibos` → Emitir recibo
- `GET /api/Recibos` → Listar recibos
- `GET /api/Recibos/{id}` → Buscar recibo por ID

---

## Tecnologias utilizadas
- ASP.NET Core 8
- Entity Framework Core
- SQLite
- Swagger (documentação e testes)

---

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/LiltonMagalhaes/CadastroClientes.git
