using Microsoft.AspNetCore.Mvc;
using CadastroClientes.Data;
using CadastroClientes.Models;

namespace CadastroClientes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        // ➕ Cadastrar cliente
        [HttpPost]
        public IActionResult Post([FromBody] Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();
            return Ok(cliente);
        }

        // 📋 Listar todos os clientes
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_context.Clientes.ToList());
        }

        // 🔍 Buscar cliente por ID
        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            var cliente = _context.Clientes.Find(id);
            if (cliente == null)
            {
                return NotFound();
            }
            return Ok(cliente);
        }

        [HttpOptions]
        public IActionResult Options()
        {
            return Ok();
        }

        // ✏️ Atualizar cliente
        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] Cliente clienteAtualizado)
        {
            var cliente = _context.Clientes.Find(id);
            if (cliente == null)
            {
                return NotFound();
            }

            // Atualiza todos os campos
            cliente.Nome = clienteAtualizado.Nome;
            cliente.Email = clienteAtualizado.Email;
            cliente.Telefone = clienteAtualizado.Telefone;
            cliente.Cpf = clienteAtualizado.Cpf;
            cliente.Endereco = clienteAtualizado.Endereco;
            cliente.Bairro = clienteAtualizado.Bairro;
            cliente.Cidade = clienteAtualizado.Cidade;
            cliente.Estado = clienteAtualizado.Estado;
            cliente.Cep = clienteAtualizado.Cep;

            _context.SaveChanges();
            return Ok(cliente);
        }

        // ❌ Excluir cliente
        [HttpDelete("{id}")]
        public IActionResult Excluir(int id)
        {
            var cliente = _context.Clientes.Find(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(cliente);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
