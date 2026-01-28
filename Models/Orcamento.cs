using System;

namespace CadastroClientes.Models
{
    public class Orcamento
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        public decimal ValorMaterial { get; set; }
        public decimal ValorMaoDeObra { get; set; }
        public decimal ValorServicos { get; set; }

        // Calcula o total automaticamente
        public decimal Total => ValorMaterial + ValorMaoDeObra + ValorServicos;

        public DateTime DataEmissao { get; set; } = DateTime.Now;
    }
}
