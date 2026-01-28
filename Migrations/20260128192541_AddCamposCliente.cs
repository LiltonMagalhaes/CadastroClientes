using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CadastroClientes.Migrations
{
    /// <inheritdoc />
    public partial class AddCamposCliente : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Bairro",
                table: "Clientes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CEP",
                table: "Clientes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CPF",
                table: "Clientes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Cidade",
                table: "Clientes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Endereco",
                table: "Clientes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Estado",
                table: "Clientes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bairro",
                table: "Clientes");

            migrationBuilder.DropColumn(
                name: "CEP",
                table: "Clientes");

            migrationBuilder.DropColumn(
                name: "CPF",
                table: "Clientes");

            migrationBuilder.DropColumn(
                name: "Cidade",
                table: "Clientes");

            migrationBuilder.DropColumn(
                name: "Endereco",
                table: "Clientes");

            migrationBuilder.DropColumn(
                name: "Estado",
                table: "Clientes");
        }
    }
}
