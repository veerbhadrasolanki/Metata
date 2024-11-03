using Microsoft.AspNetCore.Mvc;

namespace Metata.Controllers
{
    public class ImageToolsController : Controller
    {
        public IActionResult ImageToBase64()
        {
            return View();
        }

        public IActionResult Base64ToImage()
        {
            return View();
        }

        public IActionResult GradientGenerator()
        {
            return View();
        }

        public IActionResult SolidGenerator()
        {
            return View();
        }
    }
}
