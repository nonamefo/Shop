using System.Diagnostics;

using Telegram.Bot;
using Telegram.Bot.Polling;
using Telegram.Bot.Types;


namespace WebApplication1
{
    public class Methods_server
    {
        public void user_console(HttpContext context)
        {
            Console.WriteLine();

            string httpMethod = context.Request.Method;
            Console.Write(
                    $"[{context.Connection.RemoteIpAddress}:" +
                    $"{context.Connection.RemotePort}] " +
                    $"{httpMethod} {context.Response.StatusCode} " +
                    $" |:|{DateTime.Now.ToShortTimeString()}|:|\t" +
                    $"{context.Request.Path}"
                 );

        }
    }


    public class telegram_bot
    {
        public void start_chat_bot(string email, string phone, string order)
        {
            // ... 

            // Инициализация Telegram-бота
            var client = new TelegramBotClient("7383010248:AAHIKMhVhDLrW8Z7ldVFwXHwie2tB935FGU"); // Замените на ваш токен 

            // Настройка обработчика обновлений

            // Поиск пользователя с никнеймом "Nogorel"
            Task.Run(async () => {
                var users = await client.GetUpdatesAsync(offset: 0, limit: 100, timeout: 10); // Получаем список пользователей
                var targetUser = users.FirstOrDefault(u => u.Message.From.Username == "Nogorel"); 

                if (targetUser != null)
                {
                    // Отправка сообщения пользователю "Nogorel"
                    await client.SendTextMessageAsync(
                        chatId: 7116847077, 
                        text: $"Новый заказ: \n" +
                            $"Email: {email}\n" +
                            $"Телефон: {phone}\n" +
                            $"Заказ: {order}"
                    );
                    Console.WriteLine();
                }
                else
                {
                    Console.WriteLine("Пользователь с никнеймом \"Nogorel\" не найден.");
                }
            });
            Console.ReadLine();
        }
    }
    public class mail_sender{
        public void send_message_to_email(){
        // Создаем объект ProcessStartInfo
            ProcessStartInfo startInfo = new ProcessStartInfo();
            startInfo.FileName = "./main.exe"; // Имя исполняемого файла
            startInfo.Arguments = "nonamefo@mail.ru TZMJeXi4UgTXgp041ydb bariseva24@gmail.com test test3"; // Аргументы

            // Запускаем процесс
            Process.Start(startInfo);
        }
    }
}

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string ImageUrl { get; set; }
}