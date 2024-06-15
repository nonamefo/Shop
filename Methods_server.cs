namespace WebApplication1
{
    public class Methods_server
    {
        public void user_console(HttpContext context)
        {
            Console.WriteLine();

            string httpMethod = context.Request.Method;
            Console.Write(
                    $"[{context.Connection.RemoteIpAddress};" +
                    $"{context.Connection.RemotePort}] " +
                    $"{httpMethod} {context.Response.StatusCode} " +
                    $" |:|{DateTime.Now.ToShortTimeString()}|:|\t" +
                    $"{context.Request.Path}"
                 );

            Console.WriteLine();
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