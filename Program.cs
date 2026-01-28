using CadastroClientes.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ✅ Registrar o DbContext (SQLite como exemplo)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=cadastro.db"));

// ✅ Adicionar suporte a Controllers (API)
builder.Services.AddControllers();

// ✅ (Opcional) Adicionar Swagger para testar os endpoints
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ✅ Configuração do pipeline HTTP
// Sempre habilita Swagger
app.UseSwagger();
app.UseSwaggerUI();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}


app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

// ✅ Mapear Controllers (em vez de Razor Pages)
app.MapControllers();

app.Run();
