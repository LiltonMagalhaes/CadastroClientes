using Microsoft.EntityFrameworkCore;
using CadastroClientes.Models;

namespace CadastroClientes.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Orcamento> Orcamentos { get; set; }
        public DbSet<Recibo> Recibos { get; set; }
    }
}
