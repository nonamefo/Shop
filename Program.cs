using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Options;
using System;
using System.IO;
using System.Security.Cryptography.X509Certificates;
using WebApplication1;




var builder = WebApplication.CreateBuilder(args);
builder.Services.AddRazorPages();


var app = builder.Build();

Methods_server method = new Methods_server();
mail_sender mai = new mail_sender();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Map("/", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";


    method.user_console(context);

    await response.SendFileAsync("./Pages/Home.html");
});

app.Map("/Contacts", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("./Pages/Contacts.html");
});

app.Map("/About-us", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("./Pages/About-us.html");
});


app.Map("/Сatalog", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    mai.send_message_to_email();
    method.user_console(context);

    await response.SendFileAsync("./Pages/Catalog.html");
});


app.Map("/Basket", async (context) =>
{
    var response = context.Response;
    response.ContentType = "text/html;";

    method.user_console(context);

    await response.SendFileAsync("./Pages/basket.html");
});


app.Map("/Making-an-order", async(context) =>
{

    method.user_console(context);

    if (context.Request.Method == HttpMethods.Get){
        var response = context.Response;
        response.ContentType = "text/html;";
        var num = context.Items["data-id"];
        Console.WriteLine(num);
        method.user_console(context);

        await response.SendFileAsync("./Pages/Making-an-order.html");


    }else if (context.Request.Method == HttpMethods.Post) {
        var response = context.Response;
        response.ContentType = "text/html;";

        var form = context.Request.Form;

        // Проверка на заполненность полей
        if (string.IsNullOrEmpty(form["SelectOrder"]) ||
            string.IsNullOrEmpty(form["phone"]) ||
            string.IsNullOrEmpty(form["email"])) 
        {
            // Отправляем страницу с ошибкой
            await response.SendFileAsync("./Pages/error-page.html");
        }

        // Извлекаем данные из формы
        string order = form["SelectOrder"];
        string phone = form["phone"];
        string email = form["email"];
        // ... (получение других данных)
        
        telegram_bot botara = new telegram_bot();
        botara.start_chat_bot(email, phone, order);


        Console.WriteLine(order);
        Console.WriteLine(phone);
        Console.WriteLine(email);

        // Отправляем страницу с подтверждением
        await response.SendFileAsync("./Pages/thank-you-page.html");
    }
});







app.Map("/products", async (context) =>
{
    var response = context.Response;
    response.ContentType = "application/json; charset=utf-8";

    method.user_console(context);


    try
    {
        var filePath = Path.Combine(context.Request.PathBase, "./wwwroot/products/products.json");

        if (File.Exists(filePath))
        {
            var fileContent = await File.ReadAllTextAsync(filePath);
            await response.WriteAsync(fileContent);
        }
        else
        {
            response.StatusCode = 404; // ������ "���� �� ������"
            await response.WriteAsync("���� �� ������.");
        }
    }
    catch (Exception ex)
    {
        // ��������� ������ 
        response.StatusCode = 500;
        await response.WriteAsync("��������� ������.");
        Console.WriteLine(ex.Message);
    }
});



app.Run();
