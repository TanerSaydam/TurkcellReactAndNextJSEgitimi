var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var app = builder.Build();


List<Todo> Todos = new()
{
    new(1,1,"delectus aut autem",false),
    new(2,1,"quis ut nam facilis et officia qui",true),
};

app.MapGet("/api/Todos/GetAll", () =>
{
    return Results.Ok(Todos);
});


app.UseCors(x => x.AllowAnyOrigin());

app.Run();


record Todo(int Id, int UserId, string Title, bool Completed);
