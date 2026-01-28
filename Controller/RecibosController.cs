using Microsoft.AspNetCore.Mvc;
using CadastroClientes.Data;
using CadastroClientes.Models;

namespace CadastroClientes.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecibosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RecibosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Emitir(Recibo recibo)
        {
            _context.Recibos.Add(recibo);
            _context.SaveChanges();
            return Ok(recibo);
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_context.Recibos.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            var recibo = _context.Recibos.Find(id);
            if (recibo == null)
                return NotFound();

            return Ok(recibo);
        }
    }
}
