using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

builder.Services.AddTransient<ApplicationDbContext>();

ServiceProvider provider = builder.Services.BuildServiceProvider();
var context = provider.GetRequiredService<ApplicationDbContext>();

var app = builder.Build();

app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.MapGet("/api/Todos/GetAll", async (CancellationToken cancellationToken) =>
{
    var todos = await context.Todos.ToListAsync(cancellationToken);    
    return Results.Ok(todos);
});

app.MapPost("/api/Todos/Create", async (CreateTodoDto request, CancellationToken cancellationToken) =>
{
    Todo todo = new(0, request.Title, request.Completed);
    await context.AddAsync(todo, cancellationToken);
    await context.SaveChangesAsync(cancellationToken);

    return Results.Created();
});

app.MapGet("/api/Todos/DeleteById", async (int id, CancellationToken cancellationToken) =>
{
    Todo? todo = await context.Todos.FindAsync(id, cancellationToken);
    if (todo is null) return Results.NotFound();

    context.Remove(todo);
    await context.SaveChangesAsync(cancellationToken);

    return Results.NoContent();
});

app.Run();

record Todo(int Id, string Title, bool Completed);

record CreateTodoDto(string Title, bool Completed);

class ApplicationDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("MyDb");
    }

    public DbSet<Todo> Todos { get; set; }
}