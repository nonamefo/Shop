using Microsoft.Extensions.FileProviders;
using System;
using System.IO;
using WebApplication1;




var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();


var app = builder.Build();

Methods_server method = new Methods_server();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Map("/", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";


    method.user_console(context);

    await response.SendFileAsync("Pages/home.html");
});

app.Map("/Contacts", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("Pages/Contacts.html");
});

app.Map("/About-us", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("Pages/About-us.html");
});


app.Map("/Сatalog", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("Pages/Сatalog.html");
});


app.Map("/Basket", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("Pages/basket.html");
});


app.Map("/Making-an-order", async(context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";
    var num = context.Items["data-id"];
    Console.WriteLine(num);
    method.user_console(context);

    await response.SendFileAsync("Pages/Making-an-order.html");
});


app.Map("/products", async (context) =>
{
    var response = context.Response;
    response.ContentType = "application/json; charset=utf-8";

    method.user_console(context);


    try
    {
        var filePath = Path.Combine(context.Request.PathBase, "wwwroot/products/products.json");

        if (File.Exists(filePath))
        {
            var fileContent = await File.ReadAllTextAsync(filePath);
            await response.WriteAsync(fileContent);
        }
        else
        {
            response.StatusCode = 404; // Статус "Файл не найден"
            await response.WriteAsync("Файл не найден.");
        }
    }
    catch (Exception ex)
    {
        // Обработка ошибки 
        response.StatusCode = 500;
        await response.WriteAsync("Произошла ошибка.");
        Console.WriteLine(ex.Message);
    }
});



app.Run();
