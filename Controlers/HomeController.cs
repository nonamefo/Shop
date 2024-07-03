using Microsoft.AspNetCore.Mvc;

namespace MvcApp.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Index(HttpContext context)
        {
            // Доступ к объекту Response:
            var response = context.Response;
            response.ContentType = "text/html; charset=utf-8"; // Установите полный Content-Type

            // Вызов метода user_console
            UserConsole(context); // Предполагается, что метод UserConsole у вас есть

            // Отправка файла
            return File("wwwroot/basket.html", "text/html");
        }

        // Определение метода user_console (при необходимости)
        public void UserConsole(HttpContext context)
        {
            // Ваш код для взаимодействия с консолью, 
            // например, вы можете вывести что-то в консоль
            Console.WriteLine("Сообщения в консоль");
            // ... 
        }

        [HttpPost]
        public string Hello() => "Hello ASP.NET";
    }
}
