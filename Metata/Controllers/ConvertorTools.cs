using Microsoft.AspNetCore.Mvc;

namespace Metata.Controllers
{
    public class ConvertorTools : Controller
    {
        public IActionResult TemperatureConvertor()
        {
            return View();
        }

        public IActionResult UnixTimeConvertor()
        {
            return View();
        }
    }
}
