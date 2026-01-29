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

        [HttpPost]
        public IActionResult Post([FromBody] Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            _context.SaveChanges();
            return Ok(cliente);
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_context.Clientes.ToList());
        }
        [HttpOptions]
        public IActionResult Options()
        {
            return Ok();
        }

        [HttpPut("{id}")]
public IActionResult Atualizar(int id, Cliente clienteAtualizado)
{
    // Validação: ID da URL deve ser igual ao ID do objeto enviado
    if (id != clienteAtualizado.Id)
    {
        return BadRequest("ID do cliente não confere.");
    }

    var cliente = _context.Clientes.Find(id);
    if (cliente == null)
    {
        return NotFound();
    }

    cliente.Nome = clienteAtualizado.Nome;
    cliente.Email = clienteAtualizado.Email;
    cliente.Telefone = clienteAtualizado.Telefone;

    _context.SaveChanges();
    return Ok(cliente);
}


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
