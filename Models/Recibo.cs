using System;

namespace CadastroClientes.Models
{
    public class Recibo
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        public string Descricao { get; set; }
        public decimal Valor { get; set; }
        public DateTime DataPagamento { get; set; } = DateTime.Now;
    }
}
