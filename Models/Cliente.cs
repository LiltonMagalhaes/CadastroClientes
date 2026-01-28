namespace CadastroClientes.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public required string Nome { get; set; }
        public required string CPF { get; set; }
        public required string Email { get; set; }
        public required string Telefone { get; set; }
        public required string Endereco { get; set; }
        public required string Bairro { get; set; }
        public required string Cidade { get; set; }
        public required string Estado { get; set; }
        public required string CEP { get; set; }
        
    }
}
