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

    await response.SendFileAsync("wwwroot/home.html");
});

app.Map("/Contacts", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("wwwroot/Contacts.html");
});

app.Map("/About-us", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("wwwroot/About-us.html");
});


app.Map("/Ñatalog", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("wwwroot/Ñatalog.html");
});


app.Map("/Basket", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("wwwroot/basket.html");
});


app.Run();
