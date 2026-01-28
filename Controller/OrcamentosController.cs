using Microsoft.AspNetCore.Mvc;
using CadastroClientes.Data;
using CadastroClientes.Models;

namespace CadastroClientes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrcamentosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrcamentosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Emitir(Orcamento orcamento)
        {
            _context.Orcamentos.Add(orcamento);
            _context.SaveChanges();
            return Ok(orcamento);
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_context.Orcamentos.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            var orcamento = _context.Orcamentos.Find(id);
            if (orcamento == null)
                return NotFound();

            return Ok(orcamento);
        }
    }
}
